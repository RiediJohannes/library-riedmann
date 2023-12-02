"use strict";

// synchronise animations that need to start playing at the same time in order to look good
import sync from 'css-animation-sync';
sync(['wield-sword', 'wield-shield']);
sync(['move-pen', 'write-scribble-1', 'write-scribble-2']);

// functionality of the hamburger menu on mobile
$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});