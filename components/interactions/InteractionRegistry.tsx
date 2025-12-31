import { InteractionType } from '../../types';
import { McqView } from './McqView';
import { ReorderView } from './ReorderView';
import { InputView } from './InputView';
import { CategorizeView } from './CategorizeView';
import { WordSelectView } from './WordSelectView';
import { BalanceView } from './BalanceView';
import { CalculatorView } from './CalculatorView';
import { DragToSlotsView } from './DragToSlotsView';
import { TapSelectView } from './TapSelectView';
import { CircuitView } from './CircuitView';
import { GraphInputView } from './GraphInputView';
import { HotspotView } from './HotspotView';
import { SliderView } from './SliderView';
import { ObjectCountView } from './ObjectCountView';
import { SorterView } from './SorterView';
import { MoneyBuilderView } from './MoneyBuilderView';
import { AnatomyView } from './AnatomyView';
import { ProfitLossView } from './ProfitLossView';
import { PizzaBuilderView } from './PizzaBuilderView';


export const INTERACTION_COMPONENTS: Record<string, React.FC<any>> = {

  [InteractionType.MULTIPLE_CHOICE]: McqView,
  [InteractionType.MCQ]: TapSelectView,
  [InteractionType.MONEY_BUILDER]: MoneyBuilderView,
  [InteractionType.TAP_SELECT]: TapSelectView,
  [InteractionType.CIRCUIT]: CircuitView,
  [InteractionType.GRAPH_INPUT]: GraphInputView,
  [InteractionType.SORTER_BUCKET]: SorterView,
  [InteractionType.SHAPE_MATCH]: SorterView,
  [InteractionType.VISUAL]: McqView,
  [InteractionType.BINARY]: McqView,
  [InteractionType.VISUAL_COUNT]: McqView,
  [InteractionType.REORDER]: ReorderView,
  [InteractionType.INPUT]: InputView,
  [InteractionType.CATEGORIZE]: CategorizeView,
  [InteractionType.WORD_SELECT]: WordSelectView,
  [InteractionType.BALANCE]: BalanceView,
  [InteractionType.CALCULATOR]: CalculatorView,
  [InteractionType.DRAG_TO_SLOTS]: DragToSlotsView,
  [InteractionType.LOCATOR_HOTSPOT]: HotspotView,
  [InteractionType.SLIDER_INPUT]: SliderView,
  [InteractionType.OBJECT_COUNT]: ObjectCountView,
  [InteractionType.ANATOMY]: AnatomyView,
  [InteractionType.PROFIT_LOSS]: ProfitLossView,
  [InteractionType.PIZZA]: PizzaBuilderView,
};