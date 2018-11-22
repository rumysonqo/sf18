@extends('plantilla')

@section('content')
<div id="sf18">
    <div class="container-fluid">

        <div class="form-group row">
            <label for="fuente" class="col-lg-1 col-form-label">Fuente</label>
            <div class="col-lg-4">
                <select name="fuente" v-model="fte_sel" class="custom-select custom-select-md" v-on:change.prevent="getPrograma_fuente(), getPresupuesto_fuente_programa(), getGraf_ava_men_fuente_programa()">
                    <option disabled value="" selected>Selecciona una Fuente</option>
                    <option v-for="item in fuente" v-bind:value="{id:item.id_fuente, text:item.fuente_financ}">
                        @{{item.fuente_financ}}
                    </option>
                </select>
            </div>


            <label for="prog" class="col-lg-1 col-form-label">Programa</label>
            <div class="col-lg-4">
                <select name="prog" v-model="prg_sel" class="custom-select custom-select-md" v-on:change.prevent="getPresupuesto_fuente_programa(), getGraf_ava_men_fuente_programa()">
                    <option disabled value="" selected>Selecciona un Programa</option>
                    <option v-for="item in programa" v-bind:value="{id:item.id_programa, text:item.programa_pptal}">
                        @{{item.programa_pptal}}
                    </option>
                </select>
            </div>

        </div>



    <div class="row">
        <div class="col-lg-3 col-6">
            <div class="small-box bg-info">
                <div class="inner">
                    <center>    
                        <h3>PIA</h3>
                        <p>Ppto. Institucional de Apertura</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            S/. @{{ item.pia }}
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

        <div class="col-lg-3 col-6">
            <div class="small-box bg-success">
                <div class="inner">
                    <center>    
                        <h3>PIM</h3>
                        <p>Ppto. Institucional Modificado</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            S/. @{{ item.pim }}
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

        <div class="col-lg-3 col-6">
            <div class="small-box bg-warning">
                <div class="inner">
                    <center>    
                        <h3>Deveng.</h3>
                        <p>Ppto. Devengado</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            S/. @{{ item.devengado }}
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

        <div class="col-lg-3 col-6">
            <div class="small-box bg-danger">
                <div class="inner">
                    <center>    
                        <h3>% Ejec.</h3>
                        <p>% de ejecución Presupuestal</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            @{{ item.porcentaje }} %
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

       



    
    </div>
    </div>
    
    
    
    
    <div id="chartdiv" style="width: 100%; height: 600px;"></div>
</div>
@endsection