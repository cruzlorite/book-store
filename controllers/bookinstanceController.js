import mongoose from 'mongoose'

import BookInstance from '../models/bookinstance'

// Display list of all BookInstances.
export function bookinstance_list(req, res, next) {
    BookInstance.find()
      .populate('book') // invoke populate to get details of the associated book
      .exec(function (err, list_bookinstances) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
      });
  };

// Display detail page for a specific BookInstance.
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.id); 

    BookInstance.findById(id)
    .populate('book')
    .exec(function (err, bookinstance) {
      if (err) { return next(err); }
      if (bookinstance==null) { // No results.
          var err = new Error('Book copy not found');
          err.status = 404;
          return next(err);
        }
      // Successful, so render.
      res.render('bookinstance_detail', { title: 'Copy: '+bookinstance.book.title, bookinstance:  bookinstance});
    })
};

// Display BookInstance create form on GET.
export function bookinstance_create_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
export function bookinstance_create_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
export function bookinstance_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
export function bookinstance_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
export function bookinstance_update_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
export function bookinstance_update_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};