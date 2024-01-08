<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsApiCategory;

class NewsApiCategoryController extends Controller
{
    public function getCategories()
    {
        $categories = NewsApiCategory::all();

        return response()->json($categories);
    }
}
