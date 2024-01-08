<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Article;

class NewsApiCategory extends Model
{
    use HasFactory;

    protected $table = "news_api_categories";

    public function articles()
    {
        return $this->hasMany(Article::class, 'category_id');
    }
}
