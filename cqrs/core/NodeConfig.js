import {AbstractEventStoreAdapter} from './abstraction/AbstractEventStoreAdapter';
import {AbstractAggregateRepository} from './abstraction/AbstractAggregateRepository';
import {AbstractCommandBus} from './abstraction/AbstractCommandBus';
import {TypeMismatchError} from './errors/TypeMismatchError';

/**
 * Represent configuration of certain CQRS node
 */
export class NodeConfig {

    /**
     * @param {AbstractAggregateRepository} value
     */
    set aggregateRepository (value) {
        if (!(value instanceof AbstractAggregateRepository)) {
            throw new TypeMismatchError('AbstractAggregateRepository', value);
        }
        this._aggregateRepository = value;
    }

    /**
     * @returns {AbstractAggregateRepository}
     */
    get aggregateRepository () {
        return this._aggregateRepository;
    }


    /**
     * @param {AbstractCommandBus} value
     */
    set commandBus (value) {
        if (!(value instanceof AbstractCommandBus)) {
            throw new TypeMismatchError('AbstractCommandBus', value);
        }
        this._commandBus = value;
    }

    /**
     * @returns {AbstractCommandBus}
     */
    get commandBus () {
        return this._commandBus;
    }

    /**
     * @param {AbstractEventStoreAdapter} value
     */
    set eventStoreAdapter (value) {
        if (!(value instanceof AbstractEventStoreAdapter)) {
            throw new TypeMismatchError('AbstractEventStoreAdapter', value);
        }
        this._ESAdapter = value;
    }

    /**
     * @returns {AbstractEventStoreAdapter}
     */
    get eventStoreAdapter () {
        return this._ESAdapter;
    }

    /**
     * This method should check consistency of our settigs, to be sure that we have all neded option to run the node
     */
    checkConsistency () {

    }
}