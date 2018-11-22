@extends('plantilla')

@section('content')
<div id="sf18">
    <div class="container-fluid">

        <div class="form-group row">
            <label for="prog" class="col-lg-3 col-form-label">Programa Presupuestal</label>
            <div class="col-lg-4">
                <select name="prog" v-model="prg_sel" class="custom-select custom-select-md" v-on:change.prevent="getPresupuesto_programa(), getGraf_ava_men_programa()">
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