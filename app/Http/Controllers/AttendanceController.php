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
        foreach ($request->status as $student_id => $status) {
            Attendance::updateOrCreate(
                [
                    'student_id' => $student_id,
                    'tanggal' => $request->tanggal
                ],
                [
                    'status' => $status,
                    'keterangan' => $request->keterangan[$student_id] ?? null
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
                    ->where('tanggal', $tanggal)
                    ->get();

        return view('admin.absensi.riwayat', compact('absensi', 'tanggal'));
    }
}
