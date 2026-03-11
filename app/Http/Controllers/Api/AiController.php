<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AiController extends Controller
{
    private string $apiKey;
    private string $apiUrl;

    public function __construct()
    {
        $this->apiKey = config('services.mercury.key');
        $this->apiUrl = config('services.mercury.url', 'https://api.inceptionlabs.ai/v1');
    }

    /**
     * Generate AI content using Inception Mercury API.
     * The API key is NEVER sent to the frontend — it lives only here server-side.
     */
    public function generate(Request $request)
    {
        $validated = $request->validate([
            'tool'    => 'required|string|in:email,product_description,resume,cover_letter,business_name',
            'prompt'  => 'required|string|max:2000',
            'context' => 'nullable|array',
        ]);

        $systemPrompt = $this->getSystemPrompt($validated['tool']);

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
            'Content-Type'  => 'application/json',
        ])->timeout(60)->post("{$this->apiUrl}/chat/completions", [
            'model' => 'mercury-2',
            'messages' => [
                ['role' => 'system',  'content' => $systemPrompt],
                ['role' => 'user',    'content' => $validated['prompt']],
            ],
            'max_tokens'  => 2000,
            'temperature' => 0.85,
        ]);

        if ($response->failed()) {
            return response()->json([
                'error'   => 'AI generation failed. Please try again.',
                'details' => $response->json('error.message', 'Unknown error'),
            ], 500);
        }

        $content = $response->json('choices.0.message.content', '');

        return response()->json([
            'content'     => $content,
            'tool'        => $validated['tool'],
            'tokens_used' => $response->json('usage.total_tokens', 0),
        ]);
    }

    /**
     * Build the system prompt for each tool.
     *
     * IMPORTANT: Every prompt ends with the multilingual rule — the AI must
     * ALWAYS reply in the SAME language the user wrote in. If the user
     * writes in Arabic, reply in Arabic. If English, reply in English, etc.
     */
    private function getSystemPrompt(string $tool): string
    {
        $languageRule = "\n\n⚠️ CRITICAL LANGUAGE RULE: Detect the language of the user's message and ALWAYS respond in that exact same language — no exceptions. If the user writes in Arabic, your entire response must be in Arabic. If English, respond in English. If French, respond in French. Match the user's language perfectly.";

        $prompts = [
            'email' => 'You are a real person writing a professional email. Write naturally and conversationally, as if you\'re talking to a colleague or friend. Use simple, clear language. Avoid corporate jargon, buzzwords, or overly formal phrases. Write the Subject line first, then a blank line, then the email body. End with a natural sign-off. Sound genuine and authentic — like a human wrote it, not AI. Be warm but professional.' . $languageRule,

            'product_description' => 'You are a real person describing a product to a friend or customer. Write naturally and conversationally, as if you\'re explaining it in person. 

CRITICAL RULES:
- Avoid ALL marketing buzzwords: "unleash," "ultimate," "revolutionary," "experience like never before," "transform," "game-changing," etc.
- NO excessive formatting with asterisks, bold text, or emojis
- NO over-the-top claims or hyperbolic language
- Use simple, everyday language that real people use
- Write in short, readable paragraphs
- Be specific and practical — explain what it does, not how "amazing" it is
- Organize clearly: brief intro, features in simple bullet points, practical benefits, simple closing
- Sound like a knowledgeable friend explaining a product, not a salesperson
- Write as if a real human wrote this — natural, authentic, and helpful

Example of BAD writing: "Unleash crystal-clear audio and experience sound like never before!"
Example of GOOD writing: "These headphones deliver clear, balanced sound with deep bass. The noise cancellation helps block out background noise, making them great for travel or busy offices."

Write naturally and helpfully.' . $languageRule,

            'resume' => 'You are a professional resume writer helping someone create their resume. 

CRITICAL FORMATTING RULES:
- NO markdown formatting (no **, no *, no #, no ---, no brackets like [Email])
- Use plain text only
- Organize content in clear sections with simple section headers
- Use clean spacing between sections
- Write in a clear, confident tone that sounds natural and human
- Use action verbs and specific achievements with numbers/metrics when possible
- Keep each section well-organized and easy to read

REQUIRED SECTIONS (in this order):
1. Name and Contact Information (name, email, phone, location - simple format)
2. Professional Summary (2-3 sentences, natural and specific)
3. Work Experience (for each job: Job Title, Company Name, Location, Dates, then bullet points of achievements)
4. Education (Degree, School, Graduation date, relevant details)
5. Technical Skills (organized by category if helpful)

FORMATTING STYLE:
- Use simple section headers like "PROFESSIONAL SUMMARY" or "WORK EXPERIENCE"
- Use bullet points with simple dashes or numbers
- Keep paragraphs short and readable
- Use numbers and metrics naturally (e.g., "increased sales by 35%" not "increased sales by **35%**")
- No bold text, no asterisks, no special markdown characters
- Clean, professional layout that looks good when copied to Word or Google Docs

Example of BAD formatting:
**Full-Stack Engineer** – *TechWave Solutions*
- Designed and implemented a SaaS platform with **Laravel 8**

Example of GOOD formatting:
Full-Stack Engineer - TechWave Solutions
San Francisco, CA | June 2019 - Present

- Designed and implemented a SaaS platform with Laravel 8 and React 17, serving over 12,000 active users
- Streamlined API response times by 35% through query optimization

Write naturally, be specific, and organize clearly by section.' . $languageRule,

            'cover_letter' => 'You are a real person writing a cover letter for a job application. Write naturally and authentically, as if you\'re genuinely interested in the position. Avoid generic templates, clichés, or overly formal language. Show real enthusiasm and connect your experience to the job requirements. Keep it 3-4 paragraphs. Sound like a real, passionate person wrote this — not AI-generated. Be specific about why you want this job and what you bring to it.' . $languageRule,

            'business_name' => 'You are a creative person brainstorming business names. Generate 10 unique, memorable names based on the description. For each name, provide: (1) the name, (2) a brief, natural explanation of why it works, (3) whether a .com domain is likely available. Format as a simple numbered list. Be creative but practical. Sound like a real person suggesting names, not a marketing bot.' . $languageRule,
        ];

        return $prompts[$tool] ?? 'You are a helpful, professional AI assistant. Be clear, accurate, and human in your responses.' . $languageRule;
    }
}

