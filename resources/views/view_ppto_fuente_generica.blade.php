@extends('plantilla')

@section('content')
<div id="sf18">
    <div class="container-fluid">

        <div class="form-group row">
            <label for="fuente" class="col-lg-1 col-form-label">Fuente</label>
            <div class="col-lg-4">
                <select name="fuente" v-model="fte_sel" class="custom-select custom-select-md" v-on:change.prevent="getGenerica_fuente(), getPresupuesto_fuente_generica(), getPpto_fuente_generica()">
                    <option disabled value="" selected>Selecciona una Fuente</option>
                    <option v-for="item in fuente" v-bind:value="{id:item.id_fuente, text:item.fuente_financ}">
                        @{{item.fuente_financ}}
                    </option>
                </select>
            </div>


            <label for="gen" class="col-lg-1 col-form-label">Generica</label>
            <div class="col-lg-4">
                <select name="gen" v-model="gen_sel" class="custom-select custom-select-md" v-on:change.prevent="getPresupuesto_fuente_generica(), getPpto_fuente_generica()">
                    <option disabled value="" selected>Selecciona una Generica</option>
                    <option v-for="item in generica" v-bind:value="{id:item.id_generica, text:item.nombre_generica}">
                        @{{item.nombre_generica}}
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


    <div class="row"> 
    <div class="col-lg-12">

    <v-app id="inspire">
        <v-data-table
            :headers="headers_presup"
            :items="detalle_avance"
            :search="search"
            :pagination.sync="pagination"
            hide-actions
            class="elevation-5"
        >
            <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
                <span slot="activator">
                @{{ props.header.text }}
                </span>
                <span>
                @{{ props.header.text }}
                </span>
            </v-tooltip>
            </template>
            <template slot="items" slot-scope="props">
            <td width="500px">@{{ props.item.especifica }}</td>
            <td class="text-xs-right">@{{ props.item.pim }} </td>
            <td class="text-xs-right">@{{ props.item.devengado }}</td>
            <td class="text-xs-right">@{{ props.item.saldo }}</td>
            <td class="text-xs-right">@{{ props.item.porcentaje }} %</td>
            </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
                <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
            </div>
        </v-app>

        

    </div>
    </div>


    </div>
</div>


@endsection