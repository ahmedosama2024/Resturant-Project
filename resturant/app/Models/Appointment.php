<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Appointment extends Model
{
    protected $fillable = [
        'name',
        'date',
        'state',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
