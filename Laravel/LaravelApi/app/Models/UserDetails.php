<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    protected $fillable = ['CompanyName', 'CompanyType', 'UsersName'];
    protected $attributes = [ 
        'CompanyName' => 'Defualtvalue',
        'CompanyType' => 'Defualtvalue',
        'UsersName' => 'Defualtvalue'
    ];
    use HasFactory;
}
