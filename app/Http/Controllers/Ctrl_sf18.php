<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model_siaf18;
use Illuminate\Support\Facades\DB;

class Ctrl_sf18 extends Controller
{
    //
    public function index()
    {
        return view('dashboard');
    }

    public function view_por_fuente()
    {
        return view('view_por_fuente');
    }

    public function view_por_programa()
    {
        return view('view_por_programa');
    }

    public function view_por_fuente_programa()
    {
        return view('view_por_fuente_programa');
    }

    public function view_ppto_fuente_generica()
    {
        return view('view_ppto_fuente_generica');
    }

    public function view_ppto_fuente_generica_programa()
    {
        return view('view_ppto_fuente_generica_programa');
    }

    public function view_ppto_fuente_programa()
    {
        return view('view_ppto_fuente_programa');
    }

    public function view_pru()
    {
        return view('view_pru');
    }




    public function presupuesto_total()
    {
        $presup=DB::table('siaf18')
        ->select(DB::raw('format(sum(mto_pia),2) as pia, format(sum(mto_pim),2) as pim, format(sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12),2) as devengado, format((sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje'))
        ->get();
        return $presup;
    }

    public function fuente()
    {
        $fte=DB::table('siaf18')->select('id_fuente', 'fuente_financ')->distinct()->get();
        return $fte;
    }

    public function generica_fuente($fte)
    {
        $gen=DB::table('siaf18')->select('id_generica', 'nombre_generica')
        ->distinct()
        ->where('id_fuente','=',$fte)
        ->get();
        return $gen;
    }

    public function programa()
    {
        $prg=DB::table('siaf18')->select('id_programa', 'programa_pptal')->distinct()->get();
        return $prg;
    }

    public function programa_fuente($fte)
    {
        $prg=DB::table('siaf18')->select('id_programa', 'programa_pptal')
        ->distinct()
        ->where('id_fuente','=',$fte)
        ->get();
        return $prg;
    }


    public function presupuesto_fuente($fte)
    {
        $presup=DB::table('siaf18')
        ->select(DB::raw('format(sum(mto_pia),2) as pia, format(sum(mto_pim),2) as pim, format(sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12),2) as devengado, format((sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje'))
        ->where('id_fuente','=',$fte)
        ->get();
        return $presup;
    }

    public function presupuesto_fuente_generica($fte, $gen)
    {
        $presup=DB::table('siaf18')
        ->select(DB::raw('format(sum(mto_pia),2) as pia, format(sum(mto_pim),2) as pim, format(sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12),2) as devengado, format((sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje'))
        ->where('id_fuente','=',$fte)
        ->where('id_generica','=',$gen)
        ->get();
        return $presup;
    }

    public function presupuesto_fuente_generica_programa($fte, $gen, $prg)
    {
        $presup=DB::table('siaf18')
        ->select(DB::raw('format(sum(mto_pia),2) as pia, format(sum(mto_pim),2) as pim, format(sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12),2) as devengado, format((sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje'))
        ->where('id_fuente','=',$fte)
        ->where('id_generica','=',$gen)
        ->get();
        return $presup;
    }


    public function presupuesto_programa($prg)
    {
        $presup=DB::table('siaf18')
        ->select(DB::raw('format(sum(mto_pia),2) as pia, format(sum(mto_pim),2) as pim, format(sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12),2) as devengado, format((sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje'))
        ->where('id_programa','=',$prg)
        ->get();
        return $presup;
    }

    public function presupuesto_fuente_programa($fte, $prg)
    {
        $presup=DB::table('siaf18')
        ->select(DB::raw('format(sum(mto_pia),2) as pia, format(sum(mto_pim),2) as pim, format(sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12),2) as devengado, format((sum(mto_devenga_01+mto_devenga_02+mto_devenga_03+mto_devenga_04+mto_devenga_05+mto_devenga_06+mto_devenga_07+mto_devenga_08+mto_devenga_09+mto_devenga_10+mto_devenga_11+mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje'))
        ->where('id_fuente','=',$fte)
        ->where('id_programa','=',$prg)
        ->get();
        return $presup;
    }


    public function graf_ava_men()
    {
        $ava=DB::table('siaf18')
        ->select(DB::raw('sum(mto_at_comp_01) as cm01, 
        sum(mto_at_comp_02) as cm02, 
        sum(mto_at_comp_03) as cm03, 
        sum(mto_at_comp_04) as cm04,
        sum(mto_at_comp_05) as cm05,
        sum(mto_at_comp_06) as cm06,
        sum(mto_at_comp_07) as cm07,
        sum(mto_at_comp_08) as cm08,
        sum(mto_at_comp_09) as cm09,
        sum(mto_at_comp_10) as cm10,
        sum(mto_at_comp_11) as cm11,
        sum(mto_at_comp_12) as cm12,
        sum(mto_devenga_01) as dv01,
        sum(mto_devenga_02) as dv02,
        sum(mto_devenga_03) as dv03,
        sum(mto_devenga_04) as dv04,
        sum(mto_devenga_05) as dv05,
        sum(mto_devenga_06) as dv06,
        sum(mto_devenga_07) as dv07,
        sum(mto_devenga_08) as dv08,
        sum(mto_devenga_09) as dv09,
        sum(mto_devenga_10) as dv10,
        sum(mto_devenga_11) as dv11,
        sum(mto_devenga_12) as dv12,
        sum(mto_girado_01) as gr01,
        sum(mto_girado_02) as gr02,
        sum(mto_girado_03) as gr03,
        sum(mto_girado_04) as gr04,
        sum(mto_girado_05) as gr05,
        sum(mto_girado_06) as gr06,
        sum(mto_girado_07) as gr07,
        sum(mto_girado_08) as gr08,
        sum(mto_girado_09) as gr09,
        sum(mto_girado_10) as gr10,
        sum(mto_girado_11) as gr11,
        sum(mto_girado_12) as gr12,
        sum(mto_pim) as pim'))
        ->get();
        return $ava;
    }


    public function graf_ava_men_fuente($fte)
    {
        $ava=DB::table('siaf18')
        ->select(DB::raw('sum(mto_at_comp_01) as cm01, 
        sum(mto_at_comp_02) as cm02, 
        sum(mto_at_comp_03) as cm03, 
        sum(mto_at_comp_04) as cm04,
        sum(mto_at_comp_05) as cm05,
        sum(mto_at_comp_06) as cm06,
        sum(mto_at_comp_07) as cm07,
        sum(mto_at_comp_08) as cm08,
        sum(mto_at_comp_09) as cm09,
        sum(mto_at_comp_10) as cm10,
        sum(mto_at_comp_11) as cm11,
        sum(mto_at_comp_12) as cm12,
        sum(mto_devenga_01) as dv01,
        sum(mto_devenga_02) as dv02,
        sum(mto_devenga_03) as dv03,
        sum(mto_devenga_04) as dv04,
        sum(mto_devenga_05) as dv05,
        sum(mto_devenga_06) as dv06,
        sum(mto_devenga_07) as dv07,
        sum(mto_devenga_08) as dv08,
        sum(mto_devenga_09) as dv09,
        sum(mto_devenga_10) as dv10,
        sum(mto_devenga_11) as dv11,
        sum(mto_devenga_12) as dv12,
        sum(mto_girado_01) as gr01,
        sum(mto_girado_02) as gr02,
        sum(mto_girado_03) as gr03,
        sum(mto_girado_04) as gr04,
        sum(mto_girado_05) as gr05,
        sum(mto_girado_06) as gr06,
        sum(mto_girado_07) as gr07,
        sum(mto_girado_08) as gr08,
        sum(mto_girado_09) as gr09,
        sum(mto_girado_10) as gr10,
        sum(mto_girado_11) as gr11,
        sum(mto_girado_12) as gr12,
        sum(mto_pim) as pim'))
        ->where('id_fuente','=',$fte)
        ->get();
        return $ava;
    }


    public function graf_ava_men_programa($prg)
    {
        $ava=DB::table('siaf18')
        ->select(DB::raw('sum(mto_at_comp_01) as cm01, 
        sum(mto_at_comp_02) as cm02, 
        sum(mto_at_comp_03) as cm03, 
        sum(mto_at_comp_04) as cm04,
        sum(mto_at_comp_05) as cm05,
        sum(mto_at_comp_06) as cm06,
        sum(mto_at_comp_07) as cm07,
        sum(mto_at_comp_08) as cm08,
        sum(mto_at_comp_09) as cm09,
        sum(mto_at_comp_10) as cm10,
        sum(mto_at_comp_11) as cm11,
        sum(mto_at_comp_12) as cm12,
        sum(mto_devenga_01) as dv01,
        sum(mto_devenga_02) as dv02,
        sum(mto_devenga_03) as dv03,
        sum(mto_devenga_04) as dv04,
        sum(mto_devenga_05) as dv05,
        sum(mto_devenga_06) as dv06,
        sum(mto_devenga_07) as dv07,
        sum(mto_devenga_08) as dv08,
        sum(mto_devenga_09) as dv09,
        sum(mto_devenga_10) as dv10,
        sum(mto_devenga_11) as dv11,
        sum(mto_devenga_12) as dv12,
        sum(mto_girado_01) as gr01,
        sum(mto_girado_02) as gr02,
        sum(mto_girado_03) as gr03,
        sum(mto_girado_04) as gr04,
        sum(mto_girado_05) as gr05,
        sum(mto_girado_06) as gr06,
        sum(mto_girado_07) as gr07,
        sum(mto_girado_08) as gr08,
        sum(mto_girado_09) as gr09,
        sum(mto_girado_10) as gr10,
        sum(mto_girado_11) as gr11,
        sum(mto_girado_12) as gr12,
        sum(mto_pim) as pim'))
        ->where('id_programa','=',$prg)
        ->get();
        return $ava;
    }



    public function graf_ava_men_fuente_programa($fte, $prg)
    {
        $ava=DB::table('siaf18')
        ->select(DB::raw('sum(mto_at_comp_01) as cm01, 
        sum(mto_at_comp_02) as cm02, 
        sum(mto_at_comp_03) as cm03, 
        sum(mto_at_comp_04) as cm04,
        sum(mto_at_comp_05) as cm05,
        sum(mto_at_comp_06) as cm06,
        sum(mto_at_comp_07) as cm07,
        sum(mto_at_comp_08) as cm08,
        sum(mto_at_comp_09) as cm09,
        sum(mto_at_comp_10) as cm10,
        sum(mto_at_comp_11) as cm11,
        sum(mto_at_comp_12) as cm12,
        sum(mto_devenga_01) as dv01,
        sum(mto_devenga_02) as dv02,
        sum(mto_devenga_03) as dv03,
        sum(mto_devenga_04) as dv04,
        sum(mto_devenga_05) as dv05,
        sum(mto_devenga_06) as dv06,
        sum(mto_devenga_07) as dv07,
        sum(mto_devenga_08) as dv08,
        sum(mto_devenga_09) as dv09,
        sum(mto_devenga_10) as dv10,
        sum(mto_devenga_11) as dv11,
        sum(mto_devenga_12) as dv12,
        sum(mto_girado_01) as gr01,
        sum(mto_girado_02) as gr02,
        sum(mto_girado_03) as gr03,
        sum(mto_girado_04) as gr04,
        sum(mto_girado_05) as gr05,
        sum(mto_girado_06) as gr06,
        sum(mto_girado_07) as gr07,
        sum(mto_girado_08) as gr08,
        sum(mto_girado_09) as gr09,
        sum(mto_girado_10) as gr10,
        sum(mto_girado_11) as gr11,
        sum(mto_girado_12) as gr12,
        sum(mto_pim) as pim'))
        ->where('id_fuente','=',$fte)
        ->where('id_programa','=',$prg)
        ->get();
        return $ava;
    }


    public function ppto_fuente_generica($fte, $gen)
    {
        $ava=DB::table('siaf18')
        ->select(DB::raw('nombre_especifica, 
        FORMAT(sum(mto_devenga_01+
        mto_devenga_02+
        mto_devenga_03+
        mto_devenga_04+
        mto_devenga_05+
        mto_devenga_06+
        mto_devenga_07+
        mto_devenga_08+
        mto_devenga_09+
        mto_devenga_10+
        mto_devenga_11+
        mto_devenga_12),2) as devengado,
        round((sum(mto_devenga_01+
        mto_devenga_02+
        mto_devenga_03+
        mto_devenga_04+
        mto_devenga_05+
        mto_devenga_06+
        mto_devenga_07+
        mto_devenga_08+
        mto_devenga_09+
        mto_devenga_10+
        mto_devenga_11+
        mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje,
        FORMAT(sum(mto_pim),2) as pim,
        FORMAT((sum(mto_pim)-sum(mto_devenga_01+
        mto_devenga_02+
        mto_devenga_03+
        mto_devenga_04+
        mto_devenga_05+
        mto_devenga_06+
        mto_devenga_07+
        mto_devenga_08+
        mto_devenga_09+
        mto_devenga_10+
        mto_devenga_11+
        mto_devenga_12)),2) as saldo
        '))
        ->groupBy('nombre_especifica')
        ->where('id_fuente','=',$fte)
        ->where('id_generica','=',$gen)
        ->orderBy('porcentaje','desc')
        ->get();
        return $ava;
    }


    public function ppto_fuente_generica_programa($fte, $gen, $prg)
    {
        $ava=DB::table('siaf18')
        ->select(DB::raw('nombre_especifica, 
        FORMAT(sum(mto_devenga_01+
        mto_devenga_02+
        mto_devenga_03+
        mto_devenga_04+
        mto_devenga_05+
        mto_devenga_06+
        mto_devenga_07+
        mto_devenga_08+
        mto_devenga_09+
        mto_devenga_10+
        mto_devenga_11+
        mto_devenga_12),2) as devengado,
        round((sum(mto_devenga_01+
        mto_devenga_02+
        mto_devenga_03+
        mto_devenga_04+
        mto_devenga_05+
        mto_devenga_06+
        mto_devenga_07+
        mto_devenga_08+
        mto_devenga_09+
        mto_devenga_10+
        mto_devenga_11+
        mto_devenga_12)/sum(mto_pim))*100,2) as porcentaje,
        FORMAT(sum(mto_pim),2) as pim,
        FORMAT((sum(mto_pim)-sum(mto_devenga_01+
        mto_devenga_02+
        mto_devenga_03+
        mto_devenga_04+
        mto_devenga_05+
        mto_devenga_06+
        mto_devenga_07+
        mto_devenga_08+
        mto_devenga_09+
        mto_devenga_10+
        mto_devenga_11+
        mto_devenga_12)),2) as saldo
        '))
        ->groupBy('nombre_especifica')
        ->where('id_fuente','=',$fte)
        ->where('id_generica','=',$gen)
        ->where('id_programa','=',$prg)
        ->orderBy('porcentaje','desc')
        ->get();
        return $ava;
    }





}
