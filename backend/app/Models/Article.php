<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\NewsApiCountry;
use App\Models\NewsApiCategory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'source_id', 'source_name', 'author', 'title', 'url', 'url_to_image', 'published_at', 'country_id', 'category_id'
    ];

    protected $table = 'news_api_articles';

    public function country()
    {
        return $this->belongsTo(NewsApiCountry::class, 'country_id');
    }

    public function category()
    {
        return $this->belongsTo(NewsApiCategory::class, 'category_id');
    }
}
