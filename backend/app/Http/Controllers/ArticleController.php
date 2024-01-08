<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\NewsApiCountry;
use App\Models\NewsApiCategory;

class ArticleController extends Controller
{
    public function insert(Request $request)
    {   
        $articlesData = $request->all();
        /* $countryIdTest = NewsApiCountry::where('id', 2)->get()[0]->id;
        $categoryIdTest = NewsApiCategory::where('id', 2)->get()[0]->id; */
        //$countriesIds = [];

        // Recorre los datos y busca el ID correspondiente en la tabla 'news_api_countries'
       /*  foreach ($articlesData as $article) {
            // $article['news_api_countries_id'] contiene 'de' en este ejemplo
            $country = NewsApiCountry::where('nickname', $article['country_nickname'])->get();
            $category = NewsApiCategory::where('name', $article['category_name'])->get();

                $article['country_nickname'] = $country;
                $article['news_api_categories_id'] = $category;
        } */

        // Ahora puedes insertar los datos actualizados en la base de datos
        // Article::insert($articlesData);
       foreach ($articlesData as $article) {
        Article::updateOrInsert(
            [
                'source_id' => $article['source_id'],
                'source_name' => $article['source_name'],
                'author' => $article['author'],
                'title' => $article['title'],
                'url' => $article['url'],
                'url_to_image' => $article['url_to_image'],
                'published_at' => $article['published_at'],
                'country_id' => $article['country_id'],
                'category_id' => $article['category_id'], 
            ],
            $article
        ); 
    }

        return response($articlesData);
    }
}
