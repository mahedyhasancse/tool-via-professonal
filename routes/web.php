<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Api\CurrencyController;
use App\Http\Controllers\Api\AiController;
use App\Http\Controllers\SitemapController;

// ─── Authentication Routes ─────────────────────────────
Route::middleware('guest')->group(function () {
    Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'showRegistrationForm'])->name('register');
    Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);
    Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
});

Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

// ─── Public Landing Pages (Guest Access) ───────────────
Route::get('/',            fn() => Inertia::render('Landing/Home'))->name('home');
Route::get('/tools',       fn() => Inertia::render('Landing/Tools'))->name('tools');
Route::get('/blog',        fn() => Inertia::render('Landing/Blog'))->name('blog');
Route::get('/pricing',     fn() => Inertia::render('Landing/Pricing'))->name('pricing');

// ─── Dashboard Home (Public - Shows user info if logged in) ────────────────────
Route::get('/dashboard', fn() => Inertia::render('Dashboard/Index'))->name('dashboard');

// ─── Category List Pages (no dashboard prefix) ────────────────────
Route::get('/calculators',    fn () => Inertia::render('Dashboard/Calculators'))->name('dashboard.calculators');
Route::get('/business-tools', fn () => Inertia::render('Dashboard/BusinessTools'))->name('dashboard.business');
Route::get('/ai-tools',       fn () => Inertia::render('Dashboard/AiTools'))->name('dashboard.ai');
Route::get('/pdf-tools',      fn () => Inertia::render('Dashboard/PdfTools'))->name('dashboard.pdf');
Route::get('/seo-tools',      fn () => Inertia::render('Dashboard/SeoTools'))->name('dashboard.seo');

// ─── Calculator Tool Pages ─────────────────────────────────────────
Route::get('/calculators/vat-calculator',           fn () => Inertia::render('Tools/Calculators/VatCalculator'))->name('dash.vat');
Route::get('/calculators/percentage-calculator',    fn () => Inertia::render('Tools/Calculators/PercentageCalculator'))->name('dash.pct');
Route::get('/calculators/profit-margin-calculator', fn () => Inertia::render('Tools/Calculators/ProfitMarginCalculator'))->name('dash.profit');
Route::get('/calculators/age-calculator',           fn () => Inertia::render('Tools/Calculators/AgeCalculator'))->name('dash.age');
Route::get('/calculators/roi-calculator',           fn () => Inertia::render('Tools/Calculators/RoiCalculator'))->name('dash.roi');
Route::get('/calculators/loan-calculator',          fn () => Inertia::render('Tools/Calculators/LoanCalculator'))->name('dash.loan');
Route::get('/calculators/discount-calculator',      fn () => Inertia::render('Tools/Calculators/DiscountCalculator'))->name('dash.discount');
Route::get('/calculators/salary-calculator',        fn () => Inertia::render('Tools/Calculators/SalaryCalculator'))->name('dash.salary');

// ─── Business Tool Pages ───────────────────────────────────────────
Route::get('/business-tools/invoice-generator',     fn () => Inertia::render('Tools/Business/InvoiceGenerator'))->name('dash.invoice');
Route::get('/business-tools/quotation-generator',   fn () => Inertia::render('Tools/Business/QuotationGenerator'))->name('dash.quotation');
Route::get('/business-tools/break-even-calculator', fn () => Inertia::render('Tools/Business/BreakEvenCalculator'))->name('dash.breakeven');
Route::get('/business-tools/currency-converter',    fn () => Inertia::render('Tools/Business/CurrencyConverter'))->name('dash.currency');
Route::get('/business-tools/unit-converter',        fn () => Inertia::render('Tools/Business/UnitConverter'))->name('dash.unit');

// ─── AI Tool Pages ─────────────────────────────────────────────────
Route::get('/ai-tools/email-writer',        fn () => Inertia::render('Tools/Ai/EmailWriter'))->name('dash.ai.email');
Route::get('/ai-tools/product-description', fn () => Inertia::render('Tools/Ai/ProductDescription'))->name('dash.ai.product');
Route::get('/ai-tools/resume-builder',      fn () => Inertia::render('Tools/Ai/ResumeBuilder'))->name('dash.ai.resume');
Route::get('/ai-tools/cover-letter',        fn () => Inertia::render('Tools/Ai/CoverLetter'))->name('dash.ai.cover');
Route::get('/ai-tools/business-name',       fn () => Inertia::render('Tools/Ai/BusinessName'))->name('dash.ai.bname');

// ─── PDF Tool Pages ─────────────────────────────────────────────────
Route::get('/pdf-tools/pdf-merge',    fn () => Inertia::render('Tools/Pdf/PdfMerge'))->name('dash.pdf.merge');
Route::get('/pdf-tools/pdf-split',    fn () => Inertia::render('Tools/Pdf/PdfSplit'))->name('dash.pdf.split');
Route::get('/pdf-tools/image-to-pdf', fn () => Inertia::render('Tools/Pdf/ImageToPdf'))->name('dash.pdf.img');
Route::get('/pdf-tools/pdf-to-jpg',   fn () => Inertia::render('Tools/Pdf/PdfToJpg'))->name('dash.pdf.jpg');

// ─── SEO Tool Pages ─────────────────────────────────────────────────
Route::get('/seo-tools/word-counter',       fn () => Inertia::render('Tools/Seo/WordCounter'))->name('dash.seo.words');
Route::get('/seo-tools/meta-tag-generator', fn () => Inertia::render('Tools/Seo/MetaTagGenerator'))->name('dash.seo.meta');
Route::get('/seo-tools/keyword-density',    fn () => Inertia::render('Tools/Seo/KeywordDensity'))->name('dash.seo.keyword');

// ─── Redirects: old /dashboard/* URLs → new paths (301) ─────────────
Route::redirect('/dashboard/calculators', '/calculators', 301);
Route::redirect('/dashboard/business-tools', '/business-tools', 301);
Route::redirect('/dashboard/ai-tools', '/ai-tools', 301);
Route::redirect('/dashboard/pdf-tools', '/pdf-tools', 301);
Route::redirect('/dashboard/seo-tools', '/seo-tools', 301);

// Redirect nested dashboard tool URLs
Route::redirect('/dashboard/calculators/vat-calculator', '/calculators/vat-calculator', 301);
Route::redirect('/dashboard/calculators/percentage-calculator', '/calculators/percentage-calculator', 301);
Route::redirect('/dashboard/calculators/profit-margin-calculator', '/calculators/profit-margin-calculator', 301);
Route::redirect('/dashboard/calculators/age-calculator', '/calculators/age-calculator', 301);
Route::redirect('/dashboard/calculators/roi-calculator', '/calculators/roi-calculator', 301);
Route::redirect('/dashboard/calculators/loan-calculator', '/calculators/loan-calculator', 301);
Route::redirect('/dashboard/calculators/discount-calculator', '/calculators/discount-calculator', 301);
Route::redirect('/dashboard/calculators/salary-calculator', '/calculators/salary-calculator', 301);

Route::redirect('/dashboard/business-tools/invoice-generator', '/business-tools/invoice-generator', 301);
Route::redirect('/dashboard/business-tools/quotation-generator', '/business-tools/quotation-generator', 301);
Route::redirect('/dashboard/business-tools/break-even-calculator', '/business-tools/break-even-calculator', 301);
Route::redirect('/dashboard/business-tools/currency-converter', '/business-tools/currency-converter', 301);
Route::redirect('/dashboard/business-tools/unit-converter', '/business-tools/unit-converter', 301);

Route::redirect('/dashboard/ai-tools/email-writer', '/ai-tools/email-writer', 301);
Route::redirect('/dashboard/ai-tools/product-description', '/ai-tools/product-description', 301);
Route::redirect('/dashboard/ai-tools/resume-builder', '/ai-tools/resume-builder', 301);
Route::redirect('/dashboard/ai-tools/cover-letter', '/ai-tools/cover-letter', 301);
Route::redirect('/dashboard/ai-tools/business-name', '/ai-tools/business-name', 301);

Route::redirect('/dashboard/pdf-tools/pdf-merge', '/pdf-tools/pdf-merge', 301);
Route::redirect('/dashboard/pdf-tools/pdf-split', '/pdf-tools/pdf-split', 301);
Route::redirect('/dashboard/pdf-tools/image-to-pdf', '/pdf-tools/image-to-pdf', 301);
Route::redirect('/dashboard/pdf-tools/pdf-to-jpg', '/pdf-tools/pdf-to-jpg', 301);

Route::redirect('/dashboard/seo-tools/word-counter', '/seo-tools/word-counter', 301);
Route::redirect('/dashboard/seo-tools/meta-tag-generator', '/seo-tools/meta-tag-generator', 301);
Route::redirect('/dashboard/seo-tools/keyword-density', '/seo-tools/keyword-density', 301);

// ─── Old /tools/* routes → redirect to calculators ─────────────────
Route::get('/tools/{any}', fn ($any) => redirect('/calculators'))->where('any', '.*');

// ─── Admin Routes (Super Admin Only) ──────────────────
Route::middleware(['auth', 'super_admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/users', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('users.index');
    Route::put('/users/{user}/role', [App\Http\Controllers\Admin\UserController::class, 'updateRole'])->name('users.updateRole');
    Route::delete('/users/{user}', [App\Http\Controllers\Admin\UserController::class, 'destroy'])->name('users.destroy');
});

// ─── SEO & Sitemap ────────────────────────────────────
Route::get('/sitemap', [SitemapController::class, 'page'])->name('sitemap.page');
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

// ─── API Endpoints ─────────────────────────────────────
Route::prefix('api')->group(function () {
    Route::get('/currency/rates',   [CurrencyController::class, 'getRates']);
    Route::post('/currency/convert',[CurrencyController::class, 'convert']);
    Route::post('/ai/generate',     [AiController::class, 'generate']);
});
