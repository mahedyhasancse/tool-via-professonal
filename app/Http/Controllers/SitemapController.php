<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class SitemapController extends Controller
{
    /**
     * Display the sitemap page (HTML)
     */
    public function page()
    {
        $baseUrl = config('app.url', 'https://toolvia.io');
        $now = now();
        
        // Main pages
        $pages = [
            ['url' => '/', 'name' => 'Home', 'priority' => '1.0', 'changefreq' => 'daily'],
            ['url' => '/tools', 'name' => 'All Tools', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/blog', 'name' => 'Blog', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => '/pricing', 'name' => 'Pricing', 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => '/calculators', 'name' => 'Calculators', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/business-tools', 'name' => 'Business Tools', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/ai-tools', 'name' => 'AI Tools', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/pdf-tools', 'name' => 'PDF Tools', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => '/seo-tools', 'name' => 'SEO Tools', 'priority' => '0.9', 'changefreq' => 'weekly'],
        ];
        
        // Get all tools grouped by category
        $allTools = $this->getAllTools();
        $tools = [
            'Calculators' => array_filter($allTools, fn($t) => str_contains($t['url'], '/calculators/')),
            'Business Tools' => array_filter($allTools, fn($t) => str_contains($t['url'], '/business-tools/')),
            'AI Tools' => array_filter($allTools, fn($t) => str_contains($t['url'], '/ai-tools/')),
            'PDF Tools' => array_filter($allTools, fn($t) => str_contains($t['url'], '/pdf-tools/')),
            'SEO Tools' => array_filter($allTools, fn($t) => str_contains($t['url'], '/seo-tools/')),
        ];
        
        // Add icons and category labels
        $categoryIcons = [
            'Calculators' => '🧮',
            'Business Tools' => '💼',
            'AI Tools' => '🤖',
            'PDF Tools' => '📄',
            'SEO Tools' => '🔍',
        ];
        
        foreach ($tools as $category => $categoryTools) {
            $tools[$category] = array_map(function($tool) use ($category, $categoryIcons) {
                return array_merge($tool, [
                    'icon' => $this->getToolIcon($tool['name']),
                    'categoryLabel' => $category,
                    'priority' => '0.8',
                    'changefreq' => 'monthly',
                ]);
            }, array_values($categoryTools));
        }
        
        return Inertia::render('Sitemap', [
            'sitemapData' => [
                'pages' => $pages,
                'tools' => $tools,
                'lastModified' => $now->toIso8601String(),
            ]
        ]);
    }
    
    /**
     * Generate XML sitemap dynamically from routes and tools
     */
    public function index()
    {
        $baseUrl = config('app.url', 'https://toolvia.io');
        $now = now()->toAtomString();
        
        // Priority and changefreq settings
        $priorities = [
            '/' => ['priority' => '1.0', 'changefreq' => 'daily'],
            '/tools' => ['priority' => '0.9', 'changefreq' => 'weekly'],
            '/blog' => ['priority' => '0.8', 'changefreq' => 'weekly'],
            '/pricing' => ['priority' => '0.8', 'changefreq' => 'monthly'],
            '/calculators' => ['priority' => '0.9', 'changefreq' => 'weekly'],
            '/business-tools' => ['priority' => '0.9', 'changefreq' => 'weekly'],
            '/ai-tools' => ['priority' => '0.9', 'changefreq' => 'weekly'],
            '/pdf-tools' => ['priority' => '0.9', 'changefreq' => 'weekly'],
            '/seo-tools' => ['priority' => '0.9', 'changefreq' => 'weekly'],
        ];
        
        // Get all tool URLs from tools.js data structure
        $tools = $this->getAllTools();
        
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        
        // Add main pages
        foreach ($priorities as $path => $settings) {
            $xml .= $this->urlEntry($baseUrl . $path, $now, $settings['priority'], $settings['changefreq']);
        }
        
        // Add all tool pages
        foreach ($tools as $tool) {
            $xml .= $this->urlEntry(
                $baseUrl . $tool['url'],
                $now,
                '0.8', // Tool pages priority
                'monthly'
            );
        }
        
        $xml .= '</urlset>';
        
        return response($xml, 200)
            ->header('Content-Type', 'application/xml; charset=utf-8');
    }
    
    /**
     * Generate a single URL entry for sitemap
     */
    private function urlEntry($url, $lastmod, $priority, $changefreq)
    {
        return "  <url>\n" .
               "    <loc>" . htmlspecialchars($url, ENT_XML1) . "</loc>\n" .
               "    <lastmod>" . $lastmod . "</lastmod>\n" .
               "    <changefreq>" . $changefreq . "</changefreq>\n" .
               "    <priority>" . $priority . "</priority>\n" .
               "  </url>\n";
    }
    
    /**
     * Get all tools from the tools data structure
     * This matches the structure in resources/js/data/tools.js
     */
    private function getAllTools()
    {
        return [
            // Calculators
            ['url' => '/calculators/vat-calculator', 'name' => 'VAT Calculator'],
            ['url' => '/calculators/percentage-calculator', 'name' => 'Percentage Calculator'],
            ['url' => '/calculators/profit-margin-calculator', 'name' => 'Profit Margin Calculator'],
            ['url' => '/calculators/age-calculator', 'name' => 'Age Calculator'],
            ['url' => '/calculators/roi-calculator', 'name' => 'ROI Calculator'],
            ['url' => '/calculators/loan-calculator', 'name' => 'Loan Calculator'],
            ['url' => '/calculators/discount-calculator', 'name' => 'Discount Calculator'],
            ['url' => '/calculators/salary-calculator', 'name' => 'Salary Calculator'],
            
            // Business Tools
            ['url' => '/business-tools/invoice-generator', 'name' => 'Invoice Generator'],
            ['url' => '/business-tools/quotation-generator', 'name' => 'Quotation Generator'],
            ['url' => '/business-tools/break-even-calculator', 'name' => 'Break-Even Calculator'],
            ['url' => '/business-tools/currency-converter', 'name' => 'Currency Converter'],
            ['url' => '/business-tools/unit-converter', 'name' => 'Unit Converter'],
            
            // AI Tools
            ['url' => '/ai-tools/email-writer', 'name' => 'AI Email Writer'],
            ['url' => '/ai-tools/product-description', 'name' => 'AI Product Description'],
            ['url' => '/ai-tools/resume-builder', 'name' => 'AI Resume Builder'],
            ['url' => '/ai-tools/cover-letter', 'name' => 'AI Cover Letter'],
            ['url' => '/ai-tools/business-name', 'name' => 'AI Business Name Generator'],
            
            // PDF Tools
            ['url' => '/pdf-tools/pdf-merge', 'name' => 'PDF Merge'],
            ['url' => '/pdf-tools/pdf-split', 'name' => 'PDF Split'],
            ['url' => '/pdf-tools/image-to-pdf', 'name' => 'Image to PDF'],
            ['url' => '/pdf-tools/pdf-to-jpg', 'name' => 'PDF to JPG'],
            
            // SEO Tools
            ['url' => '/seo-tools/word-counter', 'name' => 'Word Counter'],
            ['url' => '/seo-tools/meta-tag-generator', 'name' => 'Meta Tag Generator'],
            ['url' => '/seo-tools/keyword-density', 'name' => 'Keyword Density Checker'],
        ];
    }
    
    /**
     * Get icon for a tool based on its name
     */
    private function getToolIcon($toolName)
    {
        $icons = [
            // Calculators
            'VAT Calculator' => '🧾',
            'Percentage Calculator' => '%',
            'Profit Margin Calculator' => '📈',
            'Age Calculator' => '🎂',
            'ROI Calculator' => '💹',
            'Loan Calculator' => '🏦',
            'Discount Calculator' => '🏷️',
            'Salary Calculator' => '💼',
            
            // Business Tools
            'Invoice Generator' => '🧾',
            'Quotation Generator' => '📋',
            'Break-Even Calculator' => '⚖️',
            'Currency Converter' => '💱',
            'Unit Converter' => '📏',
            
            // AI Tools
            'AI Email Writer' => '✉️',
            'AI Product Description' => '🛍️',
            'AI Resume Builder' => '📋',
            'AI Cover Letter' => '📄',
            'AI Business Name Generator' => '🏢',
            
            // PDF Tools
            'PDF Merge' => '📎',
            'PDF Split' => '✂️',
            'Image to PDF' => '🖼️',
            'PDF to JPG' => '🖼️',
            
            // SEO Tools
            'Word Counter' => '📝',
            'Meta Tag Generator' => '🏷️',
            'Keyword Density Checker' => '🔑',
        ];
        
        return $icons[$toolName] ?? '🔧';
    }
}
