import {Injectable} from '@angular/core';

@Injectable()
export class MovieService {
    movies: {
        id: number,
        title: string,
        poster: string,
        synopsis: string,
        genres: string[],
        year: number,
        director: String,
        actors: string[],
        hours: string[],
        room: number
    };
    constructor() {}

    getMovies() {
    }
    getMovie(id) {
    }
}
