<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\NewsApiCategoryController;
use App\Http\Controllers\NewsApiCountriesController;

Route::middleware('auth:sanctum')->group(function() {

    Route::post('/logout', [AuthController::class, 'logout']);
});


// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Save articles in the database
Route::post('/articles', [ArticleController::class, 'insert']);

Route::get('/categories', [NewsApiCategoryController::class, 'getCategories']);
Route::get('/countries', [NewsApiCountriesController::class, 'getCountries']);