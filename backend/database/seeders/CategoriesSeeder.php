<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('news_api_categories')->insert([
            'name' => 'business',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('news_api_categories')->insert([
            'name' => 'entertainment',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('news_api_categories')->insert([
            'name' => 'general',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('news_api_categories')->insert([
            'name' => 'health',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('news_api_categories')->insert([
            'name' => 'science',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('news_api_categories')->insert([
            'name' => 'sports',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('news_api_categories')->insert([
            'name' => 'technology',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
    }
}
