# Closing subscriptions

Clone the pokemon demo application: https://github.com/TimGerry/pokemon-list

In this application we have an overview of pokémon.
Each pokémon has an attack which can be trained (go to detail view -> start training).

When training is started, the counter for how many times the attack has been trained
will be increased. However, even if you stop training the counter keeps increasing.

Get this bug out of our code before our pokémon becomes overtrained!

## part 1

In the PokemonTrainingComponent, we subscribe to an observable but never unsubscribe.
Save the subscription and make sure you unsubscribe before your component is taken down.

## part 2

Imagine we didnt have 1 subscription, but many subscriptions to different observables.
It would become quite a pain to have to manually unsubscribe each subscription.

Instead, let's use a pipe!

```
// pseudo code
myObservable.pipe(
  takeUntil(destroyable)
).subscribe(...)
```

Destroyable is another observable, the 'takeUntil' operator will make sure your subscription
will be ended if the observable 'destroyable' is completed.
Complete your 'destroyable' observable on the destruction of your component.

## part 3

An AsyncPipe will automatically close your subscription, let's try and use that intead!
