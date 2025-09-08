# ReactJS Day 29 Notes: Bootstrap 5

## Introduction to Bootstrap 5

Bootstrap 5 is the latest major version of the popular CSS framework, released in May 2021. It is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. Bootstrap 5 includes HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

Key features of Bootstrap 5:
- **Mobile-first approach**: Designed to be responsive on all devices.
- **No jQuery dependency**: Uses vanilla JavaScript for components.
- **Improved grid system**: Enhanced flexbox-based grid.
- **Custom properties (CSS variables)**: For easier theming.
- **Utility API**: For generating custom utilities.
- **RTL support**: Right-to-left language support.
- **Improved accessibility**: Better ARIA attributes and keyboard navigation.

The latest version as of now is Bootstrap 5.3.x, which includes additional features like new color modes, enhanced components, and more.

## Installation

### Via CDN (Recommended for quick prototyping)
Include the following links in your HTML `<head>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5 Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
  <!-- Your content here -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

### Via npm (For projects with build tools)
```bash
npm install bootstrap@5.3.3
```

Then import in your JavaScript:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

## Grid System

Bootstrap 5 uses a 12-column responsive grid system based on flexbox.

### Basic Grid Structure
```html
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4">Column 1</div>
    <div class="col-sm-6 col-md-4">Column 2</div>
    <div class="col-sm-12 col-md-4">Column 3</div>
  </div>
</div>
```

### Responsive Breakpoints
- `xs`: <576px
- `sm`: ≥576px
- `md`: ≥768px
- `lg`: ≥992px
- `xl`: ≥1200px
- `xxl`: ≥1400px

### Auto-layout Columns
```html
<div class="container">
  <div class="row">
    <div class="col">Auto-sized column</div>
    <div class="col">Auto-sized column</div>
    <div class="col">Auto-sized column</div>
  </div>
</div>
```

## Components

### Buttons
```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
```

### Cards
```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

### Modal
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

### Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Utilities

Bootstrap 5 provides a wide range of utility classes for common CSS properties.

### Spacing
- `m-*` for margin (e.g., `mt-3` for margin-top)
- `p-*` for padding (e.g., `px-2` for horizontal padding)
- Sizes: 0, 1, 2, 3, 4, 5, auto

### Colors
- Text colors: `text-primary`, `text-secondary`, etc.
- Background colors: `bg-primary`, `bg-secondary`, etc.

### Display
- `d-none`, `d-block`, `d-inline`, `d-flex`, etc.
- Responsive variants: `d-md-none`, `d-lg-block`, etc.

### Flexbox
- `d-flex` to create flex container
- `justify-content-*` for alignment
- `align-items-*` for cross-axis alignment

## Responsive Design

Bootstrap 5 is mobile-first, meaning styles are applied from smallest to largest breakpoints.

### Responsive Images
```html
<img src="..." class="img-fluid" alt="Responsive image">
```

### Responsive Text
```html
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
```

## Migration from Bootstrap 4 to 5

Key changes:
- Dropped jQuery dependency
- Updated grid breakpoints (added `xxl`)
- Changed data attributes from `data-toggle` to `data-bs-toggle`
- Removed `.card-deck` in favor of grid
- Updated color palette
- Improved form controls

## Latest Features in Bootstrap 5.3

- **Color modes**: Light and dark mode support
- **Enhanced components**: Improved accordion, offcanvas, and more
- **New utilities**: Additional spacing and typography utilities
- **Improved accessibility**: Better focus management and ARIA support
- **CSS custom properties**: More extensive use for theming

## Example: Complete Bootstrap 5 Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5 Demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Bootstrap 5</a>
    </div>
  </nav>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <h1>Welcome to Bootstrap 5</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <button class="btn btn-primary btn-lg">Learn more</button>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Summary

Bootstrap 5 provides a robust foundation for building responsive, mobile-first websites. With its latest version (5.3.x), it offers improved performance, better accessibility, and enhanced customization options. Key concepts include the grid system, components, utilities, and responsive design principles. Always refer to the official Bootstrap documentation for the most up-to-date information and examples.
