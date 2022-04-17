<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\UserDetails;

class UserDetailsSeeder extends Seeder
{
    public function run()
    {

        // DB::table('user_details')->insert([
        //     'CompanyName' => Str::random(10),
        //     'CompanyType' => Str::random(10),
        //     'UsersName' => Str::random(10)
        // ]);
        UserDetails::truncate();

        $faker = \Faker\Factory::create();

        for ($i =0; $i < 50; $i++){
            UserDetails::create([
                "CompanyName" => $faker->name,
                "CompanyType" => $faker->name,
                "UsersName" => $faker->name,
            ]);
        }

    }
}
