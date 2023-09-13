import { Component } from "@angular/core";

@Component({
  selector: "app-pipes-examples",
  template: `
    <h2 class="text-primary">{{ name }}</h2>

    <!-- Convert text to lowercase -->
    <h2 class="text-danger">{{ name | lowercase }}</h2>

    <!-- Convert text to uppercase -->
    <h2 class="text-success">{{ name | uppercase }}</h2>

    <!-- Convert text to title case -->
    <h2 class="bg-info text-white">{{ message | titlecase }}</h2>

    <!-- Slice text, e.g., from index 3 to 5 -->
    <h2 class="text-warning">{{ name | slice : 3 : 5 }}</h2>

    <!-- Display JSON data with Bootstrap styling -->
    <pre class="json-display bg-light">{{ person | json }}</pre>

    <!-- Format number with Bootstrap styling -->
    <h2 class="text-info">{{ 5.678 | number : "1.2-3" }}</h2>

    <!-- Format number with Bootstrap styling -->
    <h2 class="text-success">{{ 5.678 | number : "1.4-5" }}</h2>

    <!-- Format number with Bootstrap styling -->
    <h2 class="text-primary">{{ 0.628 | percent }}</h2>

    <!-- Format as a percentage -->
    <h2 class="text-secondary">{{ 0.68 | currency }}</h2>

    <!-- Format as currency -->
    <h2 class="text-secondary">{{ 0.68 | currency }}</h2>

    <!-- Format as currency with currency code (e.g., GBP) -->
    <h2 class="text-secondary">{{ 0.68 | currency : "GBP" : "code" }}</h2>

    <!-- Display a date -->
    <h2 class="text-primary">{{ Date }}</h2>

    <!-- Format date in short format -->
    <h2 class="text-info">{{ Date | date : "short" }}</h2>

    <!-- Format date in short date format -->
    <h2 class="text-success">{{ Date | date : "shortDate" }}</h2>

    <!-- Format date in short time format -->

    <h2 class="text-danger">{{ Date | date : "shortTime" }}</h2>
  `,
  styleUrls: [],
})
export class PipesExamplesComponent {
  public name = "TestName";
  public message = "Pipes Example";
  public person = {
    firstName: "user",
    lastName: "Test  ",
  };

  public Date = new Date();

  constructor() {}
}
