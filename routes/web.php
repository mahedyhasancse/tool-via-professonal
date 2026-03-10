<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Api\CurrencyController;
use App\Http\Controllers\Api\AiController;

// ─── Public Landing Pages ──────────────────────────────
Route::get('/',            fn() => Inertia::render('Landing/Home'))->name('home');
Route::get('/tools',       fn() => Inertia::render('Landing/Tools'))->name('tools');
Route::get('/ai-tools',    fn() => Inertia::render('Landing/AiTools'))->name('ai-tools');
Route::get('/calculators', fn() => Inertia::render('Landing/Calculators'))->name('calculators');
Route::get('/blog',        fn() => Inertia::render('Landing/Blog'))->name('blog');
Route::get('/pricing',     fn() => Inertia::render('Landing/Pricing'))->name('pricing');

// ─── Dashboard Home ────────────────────────────────────
Route::get('/dashboard', fn() => Inertia::render('Dashboard/Index'))->name('dashboard');

// ─── Dashboard Category List Pages ────────────────────
Route::get('/dashboard/calculators',    fn() => Inertia::render('Dashboard/Calculators'))->name('dashboard.calculators');
Route::get('/dashboard/business-tools', fn() => Inertia::render('Dashboard/BusinessTools'))->name('dashboard.business');
Route::get('/dashboard/ai-tools',       fn() => Inertia::render('Dashboard/AiTools'))->name('dashboard.ai');
Route::get('/dashboard/pdf-tools',      fn() => Inertia::render('Dashboard/PdfTools'))->name('dashboard.pdf');
Route::get('/dashboard/seo-tools',      fn() => Inertia::render('Dashboard/SeoTools'))->name('dashboard.seo');

// ─── Dashboard Calculator Tool Pages ──────────────────
Route::get('/dashboard/calculators/vat-calculator',           fn() => Inertia::render('Tools/Calculators/VatCalculator'))->name('dash.vat');
Route::get('/dashboard/calculators/percentage-calculator',    fn() => Inertia::render('Tools/Calculators/PercentageCalculator'))->name('dash.pct');
Route::get('/dashboard/calculators/profit-margin-calculator', fn() => Inertia::render('Tools/Calculators/ProfitMarginCalculator'))->name('dash.profit');
Route::get('/dashboard/calculators/age-calculator',           fn() => Inertia::render('Tools/Calculators/AgeCalculator'))->name('dash.age');
Route::get('/dashboard/calculators/roi-calculator',           fn() => Inertia::render('Tools/Calculators/RoiCalculator'))->name('dash.roi');
Route::get('/dashboard/calculators/loan-calculator',          fn() => Inertia::render('Tools/Calculators/LoanCalculator'))->name('dash.loan');
Route::get('/dashboard/calculators/discount-calculator',      fn() => Inertia::render('Tools/Calculators/DiscountCalculator'))->name('dash.discount');
Route::get('/dashboard/calculators/salary-calculator',        fn() => Inertia::render('Tools/Calculators/SalaryCalculator'))->name('dash.salary');

// ─── Dashboard Business Tool Pages ────────────────────
Route::get('/dashboard/business-tools/invoice-generator',     fn() => Inertia::render('Tools/Business/InvoiceGenerator'))->name('dash.invoice');
Route::get('/dashboard/business-tools/quotation-generator',   fn() => Inertia::render('Tools/Business/QuotationGenerator'))->name('dash.quotation');
Route::get('/dashboard/business-tools/break-even-calculator', fn() => Inertia::render('Tools/Business/BreakEvenCalculator'))->name('dash.breakeven');
Route::get('/dashboard/business-tools/currency-converter',    fn() => Inertia::render('Tools/Business/CurrencyConverter'))->name('dash.currency');
Route::get('/dashboard/business-tools/unit-converter',        fn() => Inertia::render('Tools/Business/UnitConverter'))->name('dash.unit');

// ─── Dashboard AI Tool Pages ───────────────────────────
Route::get('/dashboard/ai-tools/email-writer',        fn() => Inertia::render('Tools/Ai/EmailWriter'))->name('dash.ai.email');
Route::get('/dashboard/ai-tools/product-description', fn() => Inertia::render('Tools/Ai/ProductDescription'))->name('dash.ai.product');
Route::get('/dashboard/ai-tools/resume-builder',      fn() => Inertia::render('Tools/Ai/ResumeBuilder'))->name('dash.ai.resume');
Route::get('/dashboard/ai-tools/cover-letter',        fn() => Inertia::render('Tools/Ai/CoverLetter'))->name('dash.ai.cover');
Route::get('/dashboard/ai-tools/business-name',       fn() => Inertia::render('Tools/Ai/BusinessName'))->name('dash.ai.bname');

// ─── Dashboard PDF Tool Pages ──────────────────────────
Route::get('/dashboard/pdf-tools/pdf-merge',    fn() => Inertia::render('Tools/Pdf/PdfMerge'))->name('dash.pdf.merge');
Route::get('/dashboard/pdf-tools/pdf-split',    fn() => Inertia::render('Tools/Pdf/PdfSplit'))->name('dash.pdf.split');
Route::get('/dashboard/pdf-tools/image-to-pdf', fn() => Inertia::render('Tools/Pdf/ImageToPdf'))->name('dash.pdf.img');
Route::get('/dashboard/pdf-tools/pdf-to-jpg',   fn() => Inertia::render('Tools/Pdf/PdfToJpg'))->name('dash.pdf.jpg');

// ─── Dashboard SEO Tool Pages ──────────────────────────
Route::get('/dashboard/seo-tools/word-counter',       fn() => Inertia::render('Tools/Seo/WordCounter'))->name('dash.seo.words');
Route::get('/dashboard/seo-tools/meta-tag-generator', fn() => Inertia::render('Tools/Seo/MetaTagGenerator'))->name('dash.seo.meta');
Route::get('/dashboard/seo-tools/keyword-density',    fn() => Inertia::render('Tools/Seo/KeywordDensity'))->name('dash.seo.keyword');

// ─── Old /tools/* routes → 301 redirect to dashboard ──
Route::get('/tools/{any}', fn($any) => redirect('/dashboard'))->where('any', '.*');

// ─── API Endpoints ─────────────────────────────────────
Route::prefix('api')->group(function () {
    Route::get('/currency/rates',   [CurrencyController::class, 'getRates']);
    Route::post('/currency/convert',[CurrencyController::class, 'convert']);
    Route::post('/ai/generate',     [AiController::class, 'generate']);
});
