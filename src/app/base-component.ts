import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export abstract class BaseComponent implements OnDestroy {
    public saving = false;
    protected unSubscribeOnViewDestroy: Subject<boolean> = new Subject<boolean>();
    
    public finalizeSaving(): () => void {
        return (): boolean => (this.saving = false);
    }

    public ngOnDestroy(): void {
        this.unSubscribeOnViewDestroy.next(true);
        this.unSubscribeOnViewDestroy.complete();
    }
}