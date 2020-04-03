import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { GameListServiceService } from 'src/app/services/gamelist/game-list-service.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-games-list-component',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.scss']
})
export class GamesListComponentComponent implements OnInit {

  gameList: Observable<GameItem[]>;
  gameDetail: GameItem;
  gameForm: FormGroup;
  gameEditForm: FormGroup;

  constructor(private gameService: GameListServiceService, private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      nome: ['', Validators.required],
      descrizione: ['', Validators.required],
      genere: ['', Validators.required],
      rating: ['', Validators.required],
      prezzo: ['', Validators.required],
      anno_uscita: ['', Validators.required],

    });
    this.gameEditForm = this.fb.group({
      nome: ['', Validators.required],
      descrizione: ['', Validators.required],
      genere: ['', Validators.required],
      rating: ['', Validators.required],
      prezzo: ['', Validators.required],
      anno_uscita: ['', Validators.required]
    });
  }


  get nomeControl(): FormControl {
    return this.gameForm.get('nome') as FormControl;
  }

  get descrizioneControl(): FormControl {
    return this.gameForm.get('descrizione') as FormControl;
  }
  ngOnInit(): void {
    this.recuperaListaGiochi();
  }

  recuperaListaGiochi() {
    this.gameList = this.gameService.getGames();
  }

  getDettaglio(id: number) {
    this.gameService.getGame(id).subscribe(value => {
      this.gameDetail = value.body;
      this.gameEditForm.setValue({
        nome: this.gameDetail.nome,
        descrizione: this.gameDetail.descrizione
      });
    })
  }


  modificaGioco() {
    this.gameService.putGame({
      id: this.gameDetail.id,
      nome: this.gameEditForm.get('nome').value,
      descrizione: this.gameEditForm.get('descrizione').value,
      genere: this.gameEditForm.get('genere').value,
      rating: this.gameEditForm.get('rating').value,
      prezzo: this.gameEditForm.get('prezzo').value,
      anno_uscita: this.gameEditForm.get('anno_uscita').value,
    }).subscribe(() => {
      this.recuperaListaGiochi();
    })
  }

  eliminaGioco(id: number) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.recuperaListaGiochi();
    });
  }

  aggiungiGioco() {
    this.gameService.postGame({
      id: undefined,
      nome: this.gameForm.get('nome').value,
      descrizione: this.gameForm.get('descrizione').value,
      genere: this.gameForm.get('genere').value,
      rating: this.gameForm.get('rating').value,
      prezzo: this.gameForm.get('prezzo').value,
      anno_uscita: this.gameForm.get('anno_uscita').value,
    }).subscribe(() => {
      this.recuperaListaGiochi();
    });
  }
}

