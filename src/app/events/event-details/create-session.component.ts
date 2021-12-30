import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormGroup, MaxLengthValidator, Validators } from "@angular/forms";
import { ISession } from "..";

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
  em {float:right; color:#E05C65; paddig-left:10px;}
  .error-input, .error select, .error textarea {background-color:#E3C3C5}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color:#999; }
  .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup | undefined
    name: FormControl | undefined
    presenter: FormControl | undefined
    duration: FormControl | undefined
    level: FormControl | undefined
    abstract: FormControl | undefined

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedWords(control: FormControl): { [key: string]: any } | null {
        return control.value.includes('foo') ? { 'restrictedWords': 'foo' } : null
    }

    saveSession(formValues: any) {
        let session: ISession = {
            id: 12,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session)
    }

}