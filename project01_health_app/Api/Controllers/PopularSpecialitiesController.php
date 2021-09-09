<?php

namespace App\Http\Controllers;

use App\Models\PopularSpecialities;
use Illuminate\Http\Request;

class PopularSpecialitiesController extends Controller
{
    public function index()
    {
        $allPopularSpecialities = PopularSpecialities::all();
        $response = [
            'popularSpecialities' => $allPopularSpecialities
        ];
        return $response;
    }
}
