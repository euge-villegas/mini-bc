import { Component } from '@angular/core';
import { style, trigger, state, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
        state('normal', style({
            'background-color' : 'red',
            transform: 'translateX(0)'
        })),
        state('highlighted', style({
            'background-color' : 'blue',
            transform: 'translateX(100px)'
        })),
        transition('normal <=> highlighted', animate(300))
    ]),

    trigger('list1', [
        state('in', style({
            'background-color' : 'lightpink',
            opacity: 1,
            transform: 'translateX(0)'
        })), 
        transition('void => *', [
            style({
                opacity: 0,
                transform: 'translateX(-100px)'
            }),
            animate(300)
        ]),
        transition('* => void', [
            animate(300, style({
                transform: 'translateX(100px)',
                opacity: 0,
            }))
        ]),
    ]),

    trigger('list2', [
        state('in', style({
            'background-color' : 'lightpink',
            opacity: 1,
            transform: 'translateX(0)'
        })), 
        transition('void => *', [
            animate(1000, keyframes([
                style({
                    transform: 'translateX(-100px)',
                    opacity: 0,
                    offset: 0
                }),
                style({
                    transform: 'translateX(-50px)',
                    opacity: 0.5,
                    offset: 0.3
                }),
                style({
                    transform: 'translateX(-20px)',
                    opacity: 1,
                    offset: 0.8
                }),
                style({
                    transform: 'translateX(0px)',
                    opacity: 1,
                    offset: 1
                })
            ]))
        ]),
        transition('* => void', [
            group([
                animate(50, style({
                color: 'red'
            })),
            animate(300, style({
                transform: 'translateX(100px)',
                opacity: 0,
            }))
            ]),
            
        ]),
    ]),

  ]
})
export class AppComponent {
  state = 'normal';
  newState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    }

    onShrink() {
        this.newState = 'shrunken';
    }

    onAdd(item: string) {
      this.list.push(item);
    }

    onDelete(item: string) {
        this.list.splice(this.list.indexOf(item), 1);
        
    }

    animationStarted(event: any) {
        console.log(event);
    }
    
    animationFinished(event: any) {
        console.log(event);
    }
}
