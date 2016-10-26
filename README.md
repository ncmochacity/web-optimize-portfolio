# Website Performance Optimization

The goal for this project was to optimize Cameron Pittman's portfolio page for pagespeed and better performance with rendering.
The strategy was to utilize skills attained in the Website Performance Optimization Course that results in 90 on pagespeed  for both mobile and desktop. Optimizations will be made to views/main.js for the pizza page to run at 60 frames per second.

## How to run
**1.** Git clone the repository or download the repository as a zip file
```
$ git clone https://github.com/ncmochacity/web-optimize-portfolio.git
```
1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```
### Portfolio Index Page Optimizations
1. Image compression: using Grunt responsive images for automating image compression
1. Inlining CSS for minimizing render blocking CSS that speeds page loads
1. Added a media attribute for "print" in the head tag for print styles
1. Added the [async attribute] to all script tags  

## Pagespeed results
* After optimization changes, the pagespeed score for Cameron's index page increased to 95/100 for mobile and 97/100 for desktop with 100/100 for user experience.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
