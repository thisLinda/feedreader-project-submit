//Resources utilized in addition to Udacity project lessons:
//https: //matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/
//https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/
//https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
//https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/
// Ben Cunningham video https://www.youtube.com/watch?v=_XwH-xfvydw
//LearnCode.academy video https://www.youtube.com/watch?v=obaSQBBWZLk
//hColleen code shared on Slack https://github.com/hColleen/frontend-nanodegree-feedreader/blob/master/jasmine/spec/feedreader.js
//https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true

//DESCRIPTIVE & concise `it` notation

/* feedreader.js
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function () {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    describe('RSS Feeds', function () {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('allFeeds variable is defined & not empty', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('each feed url defined & not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            }
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('feed name defined & not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            }
        });
    });

    /* Write a new test suite named "The menu" */

    describe('The menu', function () {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('menu is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu changes visibility on click', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //asynchronous code instruction and code written by Lloan Alas https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
    /*Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(done => {
            loadFeed(0, done);
        });

        it('when loadFeed function is called/done there is at least 1 entry found', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Write a new test suite named "New Feed Selection"
     * placement of variables in consideration of scope (and asynchronous code as noted above), instructed by and code written by Lloan Alas https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
     */

    describe('New Feed Selection', function () {
        let feedOne;
        let feedTwo;

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(done => {
            loadFeed(0, function () {
                feedOne = $('.feed').html();
                done();
            });
            loadFeed(0, function () {
                feedTwo = $('.feed').html();
                done();
            });
        });

        it('check for content change on new loadFeed function call', function () {
            expect(feedOne === feedTwo).toBe(false);
        });
    });
}());