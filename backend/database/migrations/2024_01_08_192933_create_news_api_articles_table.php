<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news_api_articles', function (Blueprint $table) {
            $table->id();
            $table->string('source_id');
            $table->string('source_name');
            $table->string('author');
            $table->string('title');
            $table->text('url');
            $table->text('url_to_image')->nullable();
            $table->string('published_at');
            $table->unsignedBigInteger('country_id');
            $table->foreign('country_id')->references('id')->on('news_api_countries');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('news_api_categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_api_articles');
    }
};
