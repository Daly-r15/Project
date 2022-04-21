<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->string('Question1');
            $table->string('Question2');
            $table->string('Question3');
            $table->string('Question4');
            $table->string('Question5');
            $table->string('Question6');
            $table->string('Question7');
            $table->string('Question8');
            $table->string('Question9');
            $table->string('Question10');
            $table->string('Question11');
            $table->string('Question12');
            $table->string('Question13');
            $table->string('Question14');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('answers');
    }
}
