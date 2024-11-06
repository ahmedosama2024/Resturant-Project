<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appointments=Appointment::all();
        return response()->json($appointments);
    }
    public function users(){
        $users=User::all();
        return response()->json($users);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate=Validator::make($request->all(),[
            "name"=>"required",
            "date"=>"required"
        ]);
        if(!$validate){
            return response()->json($validate->errors());
        }
        $date=Appointment::create([
            "name"=>$request->name,
            "date"=>$request->date,
            "state"=>$request->state? $request->state:"Pendding",
        ]);
        
        $appointment=[
            'data'=>$date,
        ];
        return response()->json($appointment);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data=Appointment::findOrFail($id);
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data=Appointment::findOrFail($id);
        $data->delete();
        $success=["massage"=>"Data Deleted successfully"];
        return response()->json($success);
    }
}
