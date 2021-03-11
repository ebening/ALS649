import {Component} from '@angular/core';
import {IMultiSelectSettings, IMultiSelectTexts, IMultiSelectOption} from "../shared/multiselect-dropdown";
import {Persistence} from "../../../service/persistence";
import {ListaService} from "../../../service/listas.service";
import {CatZona} from "../../../model/CatZona";
import {ConfigMedio} from "../../../model/ConfigMedio";
import {CatMedioService} from "../../../service/catmedio.service";
import {CatMedio} from "../../../model/CatMedio";
import {EtiquetaService} from "../../../service/etiquetas.service";
import {CatCategory} from "../../../model/CatCategory";
import {CategoryService} from "../../../service/category.service";
import {CatSubcategory} from "../../../model/CatSubcategory";
import {SubCategoryService} from "../../../service/subcategory.service";
import {EspacioConfig} from "../../../model/EspacioConfig";
import {TblMecanica} from "../../../model/TblMecanica";

@Component({
    selector: 'tabmedios',
    templateUrl: './tabmedios.html',
    styleUrls: ['../../../../resources/css/tabmedios.css'],
})

export class TabMedios{
  private titulo: string[];
  private colorSelect: string = 'blue';

  private selectSettings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'glyphicon',
    buttonClasses: 'btn btn-primary',
    selectionLimit: 0,
    closeOnSelect: false,
    showCheckAll: true,
    showUncheckAll: true,
    dynamicTitleMaxItems: 1,
    maxHeight: '200px',
    dropup: false
  };

  private selectSettingsOne: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'glyphicon',
    buttonClasses: 'btn btn-info',
    selectionLimit: 1,
    closeOnSelect: true,
    showCheckAll: false,
    showUncheckAll: false,
    dynamicTitleMaxItems: 1,
    maxHeight: '200px',
    dropup: false
  };

  private selectTexts: IMultiSelectTexts = {
    checkAll: 'Todos',
    uncheckAll: 'Quitar Todos',
    checked: 'Seleccionado',
    checkedPlural: 'Seleccionados',
    searchPlaceholder: 'Buscar...',
    defaultTitle: ''
  };

  private hojaList: IMultiSelectOption[] = [];
  private espacioList: IMultiSelectOption[] = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: '4'},
    {id: 5, name: '5'},
    {id: 6, name: '6'},
    {id: 7, name: '7'},
    {id: 8, name: '8'},
    {id: 9, name: '9'},
    {id: 10, name: '10'},
    {id: 11, name: '11'},
    {id: 12, name: '12'},
    {id: 13, name: '13'},
    {id: 14, name: '14'},
    {id: 15, name: '15'},
  ];
  private categoList: IMultiSelectOption[] = [];
  private subcategoList: IMultiSelectOption[] = [];

  private zonasList: IMultiSelectOption[] = [];
  private tipoMedios: IMultiSelectOption[] = [];

  private zonaSelected: number[] = [];
  private hojaSelected: number[] = [];
  private espacioSelected: number[] = [];
  private categoriaSelected: number[] = [];
  private subcategoSelected: number[] = [];
  private tipoMedioSelected: number[] = [];
  private tipo: CatMedio;

  private currentConfig: ConfigMedio = new ConfigMedio();

  private indices: number[] = [];

  // Seleccion en la tabla


  constructor(
    private persistence: Persistence,
    private listaService: ListaService,
    private medioService: CatMedioService,
    private etiquetaService: EtiquetaService,
    private categoryService: CategoryService,
    private subcategoryService: SubCategoryService){}

  ngOnInit(){
    let zonas: CatZona[] = this.listaService.getZonasByIdGZ([1]);
    zonas.forEach(x => {
      this.zonasList.push({id: x.id, name: x.nombre});
    });
    let catego: CatCategory[] = this.categoryService.getCategories();
    catego.forEach(x => {
      this.categoList.push({id:x.id, name:x.nombre});
    });
    let medios: CatMedio[] = this.medioService.getCatMedios();
    medios.forEach(x => {
      this.tipoMedios.push({id: x.id, name: x.nombre});
    });
    this.tipo = this.medioService.getCatMedioById(1);
    this.crearHojas();
  }

  asignar(){
    for (var i: number = 0; i < this.espacioSelected[0]; i++){
      let espacio: EspacioConfig = new EspacioConfig();
      espacio.id = Math.floor(Math.random() * 9999999) + 1;
      espacio.hoja = this.hojaSelected[0];
      espacio.espacio = this.indices[this.hojaSelected[0]];
      espacio.categoria = this.categoryService.getCategoryById(this.categoriaSelected[0]);
      espacio.subcategory = this.subcategoryService.getSubCategoById(this.subcategoSelected[0]);
      espacio.mecanica = new TblMecanica();
      this.currentConfig.espacios.push(espacio);
      this.indices[this.hojaSelected[0]] = this.indices[this.hojaSelected[0]] + 1;
    }
    this.currentConfig.espacios.sort((x, y) => x.hoja - y.hoja);
  }

  onTipoSelected(){
    this.tipo = this.medioService.getCatMedioById(this.tipoMedioSelected[0]);
    this.crearHojas();
  }

  onCategoSelect(){
    this.subcategoList=[];
    let sub: CatSubcategory[] = this.subcategoryService.getSubCategoByIdCatego(this.categoriaSelected[0]);
    sub.forEach(x => {
      this.subcategoList.push({id:x.id, name:x.nombre});
    });
  }

  onZonaSelected(){
    let z: CatZona = this.listaService.getZonaById(this.zonaSelected[0]);
    this.currentConfig.nombre = this.tipo.nombre + " " + z.nombre;
  }

  onDelete(){
    let indexes: number[] = [];
    this.currentConfig.espacios.forEach(x => {
      if (x.isSelected == true){
        indexes.push(this.getIndexFromList(x));
        this.indices[x.hoja] -= 1;
      }
    });
    for (var i: number = 0; i < indexes.length; i++){
      this.currentConfig.espacios.splice(indexes[i] - i, 1);
    }
    this.regenerateEspacios();
  }

  getIndexFromList(esp: EspacioConfig): number {
    return this.currentConfig.espacios.indexOf(esp);
  }

  regenerateEspacios(){
    let auxIndex: number[] = [];
    this.indices.forEach(x => {
      auxIndex.push(1);
    });
    this.currentConfig.espacios.forEach(x => {
      x.espacio = auxIndex[x.hoja];
      auxIndex[x.hoja] += 1;
    });
  }

  rowSelect(espacio: EspacioConfig){
    espacio.isSelected = !espacio.isSelected;
  }

  crearTabDyn(){
    this.currentConfig.tipo = this.tipo;
    this.currentConfig.zonas = [];
    this.currentConfig.tiendas = [];
    this.zonaSelected.forEach(x => {
      this.currentConfig.zonas.push(this.listaService.getZonaById(x));
    });
    this.persistence.eventoSelected.totalMedios += 1;
    this.persistence.saveForCopy([this.currentConfig]);
    switch (this.tipo.id){
      case 1: this.persistence.eventoSelected.tabloides.push(this.persistence.getForPaste()[0]); break;
      case 2: this.persistence.eventoSelected.dipticos.push(this.persistence.getForPaste()[0]); break;
      case 3: this.persistence.eventoSelected.prensa.push(this.persistence.getForPaste()[0]); break;
      case 4: this.persistence.eventoSelected.volantes.push(this.persistence.getForPaste()[0]);break;
      case 5: this.persistence.eventoSelected.radiotv.push(this.persistence.getForPaste()[0]); break;
    }
  }

  crearHojas(){
    switch (this.tipo.id) {
      case 1:
        this.hojaList=this.crearOpciones(8);
        //	this.espacioList=this.crearOpciones(6);
        break;
      case 2:
        this.hojaList=this.crearOpciones(4);
        //	this.espacioList=this.crearOpciones(6);
        break;
      case 3:
        this.hojaList=this.crearOpciones(1);
        //	this.espacioList=this.crearOpciones(6);
        break;
    }
  }

  crearOpciones(x:number):IMultiSelectOption[]{
    let opciones: IMultiSelectOption[] = [];
    let index: number = 0;
    for(var i: number = 0; i <= x; i++){
      this.indices.push(1);
      index = i;
      opciones.push({id:i, name:''+ (i == 0 ? 'Portada' : i)});
    }
    opciones.push({id: index + 1, name: 'Contraportada'});
    return opciones;
  }

}
