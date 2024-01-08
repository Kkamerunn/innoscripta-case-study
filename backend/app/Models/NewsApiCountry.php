<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Article;

class NewsApiCountry extends Model
{
    use HasFactory;

    protected $table = "news_api_countries";

    public function articles()
    {
        return $this->hasMany(Article::class, 'country_id');
    }
}
