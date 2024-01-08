<?php

namespace App\Http\Controllers;
use App\Models\NewsApiCountry;

use Illuminate\Http\Request;

class NewsApiCountriesController extends Controller
{
    public function getCountries()
    {
        $countries = NewsApiCountry::all();

        return response()->json($countries);
    }
}
