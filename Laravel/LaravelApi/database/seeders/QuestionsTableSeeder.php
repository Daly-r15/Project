<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Questions;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Questions::truncate();

        $faker = \Faker\Factory::create();

        for ($i =0; $i < 50; $i++){
            Questions::create([
                "Question1" => $faker->randomElement(['Yes', 'No']),
                "Question2" => $faker->randomElement(['Yes', 'No']),
                "Question3" => $faker->paragraph
            ]);
        }
    }
}
