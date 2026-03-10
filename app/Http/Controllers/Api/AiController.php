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
            'max_tokens'  => 1500,
            'temperature' => 0.75,
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
            'email' => 'You are a professional email writer. Write clear, concise, and professional emails. Format: start with the Subject line, then a blank line, then the full email body. End with an appropriate sign-off. Keep a professional yet warm tone. Write naturally — like a real human, not a robot.' . $languageRule,

            'product_description' => 'You are an expert e-commerce copywriter. Write compelling, SEO-optimized product descriptions that highlight key benefits, features, and a strong call-to-action. Use persuasive, human language. Structure: opening hook, key features (bullet points), benefits paragraph, and a CTA. Sound genuine and helpful, not salesy.' . $languageRule,

            'resume' => 'You are a professional resume writer and career coach. Create a well-structured, ATS-friendly resume based on the information provided. Use action verbs and quantify achievements where possible. Format with clear sections: Professional Summary, Work Experience, Education, Skills. Write in a confident, human tone.' . $languageRule,

            'cover_letter' => 'You are a professional career counselor. Write a compelling, personalized cover letter that matches job requirements, highlights relevant skills, and shows genuine enthusiasm. Keep it 3-4 paragraphs. Sound like a real, passionate person — not a template. Avoid clichés.' . $languageRule,

            'business_name' => 'You are a creative branding expert. Generate 10 unique, memorable, and brandable business names based on the description. For each name provide: (1) the name in bold, (2) a one-line explanation of its appeal, (3) whether a .com domain is likely available. Format as a numbered list. Be creative and human.' . $languageRule,
        ];

        return $prompts[$tool] ?? 'You are a helpful, professional AI assistant. Be clear, accurate, and human in your responses.' . $languageRule;
    }
}

