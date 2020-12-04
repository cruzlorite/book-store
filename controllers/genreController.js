import async from 'async'
import mongoose from 'mongoose'

import Genre from '../models/genre'
import Book from '../models/book'

// Display list of all Genre.
export function genre_list(req, res) {
    Genre.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_genres) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
    });
};

// Display detail page for a specific Genre.
export function genre_detail(req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.id); 

    async.parallel({
        // fetch genre name by id 
        genre: function(callback) {
            Genre.findById(id).exec(callback);
        },
        // fetch all books of specified genre
        genre_books: function(callback) {
            Book.find({ 'genre': id }).exec(callback);
        },
    },
    function(err, results) {
        if (err) { return next(err); }
        if (results.genre == null) { // No results.
            var err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
    });
};

// Display Genre create form on GET.
export function genre_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
export function genre_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
export function genre_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
export function genre_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
export function genre_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
export function genre_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};