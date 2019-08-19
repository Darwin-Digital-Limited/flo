import React from 'react';
import {storiesOf} from '@storybook/react';
import '../../assets/dist/bloc.min.css';
import {Accordion} from '../../assets/js/src/react/Accordion/Accordion';

const content = `<p>If you ask for Pasta Alfredo in a restaurant in Italy all you get from your waiter is a stare. Why is one of the most famous “Italian sauces” for pasta unknown in its country of origin? The answer is simple: because in Italy Pasta Alfredo doesn’t exist.</p>
<p>Yes, Italians make a dish of pasta, fettuccine dressed with nothing else than good aged parmigiano cheese and a lot of butter, but is such a simple preparation that Italians don’t even consider it a “recipe”.</p><p>Waverly Root in his famous book “The Food of Italy” (New York, 1971) wrote: “FETTUCCINE AL BURRO is associated in every tourist’s mind with Rome, possibly because the original Alfredo succeeded in making its serving a spectacle reminiscent of grand opera. It is the same ribbon shaped egg pasta tat is called tagliatelle in Bologna; but the al burro preparation is very Roman indeed in its rich simplicity. Nothing is added to the pasta except grated cheese and butter – lots of butter. The recipe calls for doppio burro, double butter, which gives it a golden color.”</p>`;

storiesOf('Accordion', module)
  .add('default', () => <Accordion items={[{title: 'Item one', content: 'This is the content for item one'}, {
    title: 'Item two',
    content: 'This is the content for item two'
  }, {title: 'With HTML', content}]}/>);
