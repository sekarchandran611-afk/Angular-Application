import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <h2>Smart Text Application</h2>

      <textarea [(ngModel)]="text" placeholder="Type your text here..."></textarea>

      <p *ngIf="text.trim() === ''" class="warning">
        Please enter some text
      </p>

      <div class="buttons">
        <button (click)="clearText()">Clear</button>
      </div>

      <div class="box">
        <p><b>Words:</b> {{ getWordCount() }}</p>
        <p><b>Characters:</b> {{ getCharCount() }}</p>
        <p><b>Characters (No Spaces):</b> {{ getCharNoSpaces() }}</p>
        <p><b>Sentences:</b> {{ getSentenceCount() }}</p>
        <p><b>Reading Time:</b> {{ getReadingTime() }} min</p>
        <p><b>Avg Word Length:</b> {{ getAvgWordLength() }}</p>
      </div>
    </div>
  `
})
export class AppComponent {

  text: string = '';

  // Word count
  getWordCount(): number {
    return this.text.trim() === '' ? 0 : this.text.trim().split(/\s+/).length;
  }

  // Character count
  getCharCount(): number {
    return this.text.length;
  }

  // Characters without spaces
  getCharNoSpaces(): number {
    return this.text.replace(/\s/g, '').length;
  }

  // Sentence count
  getSentenceCount(): number {
    return this.text.trim() === '' ? 0 : this.text.split('.').filter(s => s.trim().length > 0).length;
  }

  // Reading time (200 words per minute)
  getReadingTime(): number {
    const words = this.getWordCount();
    return words === 0 ? 0 : Math.ceil(words / 200);
  }

  // Average word length
  getAvgWordLength(): number {
    if (this.text.trim() === '') return 0;

    const words = this.text.trim().split(/\s+/);
    const totalLength = words.reduce((sum, w) => sum + w.length, 0);

    return +(totalLength / words.length).toFixed(2);
  }

  // Clear text
  clearText() {
    this.text = '';
  }
}

bootstrapApplication(AppComponent);