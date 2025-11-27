@extends('layouts.admin')

@section('title', 'Absensi Siswa')

@section('content')
<div class="container-fluid">
    <h1 class="mb-3">Absensi Tanggal {{ $tanggal }}</h1>

    <form action="{{ route('admin.absensi.store') }}" method="POST">
    @csrf

    <input type="hidden" name="tanggal" value="{{ $tanggal }}">

    <table class="table">
        <thead>
            <tr>
                <th>Nama</th>
                <th>Status</th>
                <th>Keterangan</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($siswa as $item)
            <tr>
                <td>{{ $item->nama_lengkap }}</td>

                <td>
                    <select name="status[{{ $item->id }}]" class="form-control">
                        <option value="Hadir">Hadir</option>
                        <option value="Izin">Izin</option>
                        <option value="Sakit">Sakit</option>
                        <option value="Alpa">Alpa</option>
                    </select>
                </td>

                <td>
                    <input type="text" name="keterangan[{{ $item->id }}]" class="form-control">
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <button class="btn btn-primary">Simpan Absensi</button>
</form>

</div>
@endsection
