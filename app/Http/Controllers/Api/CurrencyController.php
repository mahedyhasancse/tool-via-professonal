<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class CurrencyController extends Controller
{
    private string $apiKey;
    private string $baseUrl = 'https://v6.exchangerate-api.com/v6';

    public function __construct()
    {
        $this->apiKey = config('services.exchange_rate.key');
    }

    /**
     * Get all exchange rates (cached for 1 hour)
     */
    public function getRates(Request $request)
    {
        $base = strtoupper($request->get('base', 'USD'));

        $cacheKey = "currency_rates_{$base}";

        $data = Cache::remember($cacheKey, 3600, function () use ($base) {
            $response = Http::get("{$this->baseUrl}/{$this->apiKey}/latest/{$base}");

            if ($response->successful()) {
                return $response->json();
            }
            return null;
        });

        if (!$data) {
            return response()->json(['error' => 'Failed to fetch rates'], 500);
        }

        return response()->json([
            'base' => $data['base_code'] ?? $base,
            'rates' => $data['conversion_rates'] ?? [],
            'time_last_updated' => $data['time_last_update_utc'] ?? now()->toDateTimeString(),
        ]);
    }

    /**
     * Convert currency
     */
    public function convert(Request $request)
    {
        $validated = $request->validate([
            'from' => 'required|string|size:3',
            'to' => 'required|string|size:3',
            'amount' => 'required|numeric|min:0',
        ]);

        $from = strtoupper($validated['from']);
        $to = strtoupper($validated['to']);
        $amount = $validated['amount'];

        $cacheKey = "currency_rates_{$from}";

        $data = Cache::remember($cacheKey, 3600, function () use ($from) {
            $response = Http::get("{$this->baseUrl}/{$this->apiKey}/latest/{$from}");
            return $response->successful() ? $response->json() : null;
        });

        if (!$data || !isset($data['conversion_rates'][$to])) {
            return response()->json(['error' => 'Conversion failed'], 500);
        }

        $rate = $data['conversion_rates'][$to];
        $result = $amount * $rate;

        return response()->json([
            'from' => $from,
            'to' => $to,
            'amount' => $amount,
            'rate' => $rate,
            'result' => round($result, 4),
            'formatted' => number_format($result, 2),
        ]);
    }
}
