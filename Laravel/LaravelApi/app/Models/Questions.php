<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    public $timestamps =false;
    protected $fillable = ['Questions'];
    protected $attributes = [ 
        'Questions' => 'Defaultvalue'
    ];
    use HasFactory;
}
