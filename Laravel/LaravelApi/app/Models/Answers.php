<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answers extends Model
{
    public $timestamps =false;
    protected $fillable = ['Question1','Question2','Question3','Question4','Question5','Question6','Question7','Question8','Question9','Question10','Question11','Question12','Question13','Question14'];
    protected $attributes = [ 
        'Question1' => 'Default Answer',
        'Question2' => 'Default Answer',
        'Question3' => 'Default Answer',
        'Question4' => 'Default Answer',
        'Question5' => 'Default Answer',
        'Question6' => 'Default Answer',
        'Question7' => 'Default Answer',
        'Question8' => 'Default Answer',
        'Question9' => 'Default Answer',
        'Question10' => 'Default Answer',
        'Question11' => 'Default Answer',
        'Question12' => 'Default Answer',
        'Question13' => 'Default Answer',
        'Question14' => 'Default Answer'
    ];
    use HasFactory;
}
