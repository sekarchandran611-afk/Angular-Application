import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  myText: string = '';
  countWords() {
    if (this.myText == '') {
      return 0;
    }
    return this.myText.trim().split(/\s+/).length;
  }

  resetEverything() {
    this.myText = '';
  }
}
