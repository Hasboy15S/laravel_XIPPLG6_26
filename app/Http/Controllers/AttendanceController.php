<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    // halaman absensi hari ini
    public function index()
    {
        $tanggal = date('Y-m-d');
        $siswa = Student::all();

        return view('admin.absensi.index', compact('siswa', 'tanggal'));
    }

    // simpan absensi
    public function store(Request $request)
    {
        dd($request->all());
        foreach ($request->status as $student_id => $status) {
            Attendance::updateOrCreate(
                [
                    'student_id' => $student_id,
                    'date' => $request->tanggal   // kolom di DB: date
                ],
                [
                    'status' => $status,
                    'description' => $request->keterangan[$student_id] ?? null  // kolom di DB: description
                ]
            );
        }

        return redirect()->route('admin.absensi.index')->with('success', 'Absensi berhasil disimpan!');
    }

    // halaman riwayat
    public function riwayat(Request $request)
    {
        $tanggal = $request->tanggal ?? date('Y-m-d');

        $absensi = Attendance::with('student')
                    ->where('date', $tanggal) // perbaikan: WAS 'tanggal'
                    ->get();

        return view('admin.absensi.riwayat', compact('absensi', 'tanggal'));
        $request->validate([
    'tanggal' => 'required|date'
]);

    }
    
}
