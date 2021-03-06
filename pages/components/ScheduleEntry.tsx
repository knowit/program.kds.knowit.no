import Talk from "./Talk";
import {Component, CSSProperties} from "react";
import Room from './Room';
import {getDuration, Time} from '../../helpers/time';

interface IProps {
    day: string
    slot: any
    showRoomHeader: boolean,
    tags: string[],
    trackLength: number,
    onToggleTag: (val) => void
}

class ScheduleEntry extends Component<IProps, any> {
    constructor(props) {
        super(props);
    }

    createRoom(room, index: number) {
        let from = Time.fromNumber(this.props.slot.timeStart);
        let trackIndex = 0;
        const talks = room.talks
            .map((talk) => {
                    const style = {
                        msGridRow: trackIndex + 2,
                        msGridColumn: index + 1
                    };
                    const to = from.copy().add(getDuration(talk));
                    const talkEl = (<div
                        className={`talk-container ${trackIndex % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'}`}
                        key={trackIndex}
                        style={style as CSSProperties}>
                        <Talk
                            visibility={!talk.hide}
                            day={this.props.day}
                            timeStart={from}
                            timeEnd={to}
                            room={room.name}
                            difficulty={talk.difficulty}
                            id={talk.talkId}
                            type={talk.type}
                            title={talk.title}
                            speaker={talk.speakers}
                            tags={talk.tags}
                            selectedTags={this.props.tags}
                            language={talk.language}
                            onToggleTag={this.props.onToggleTag}
                            key={trackIndex}
                        />
                    </div>);

                    from = to;

                    if (!talk.hide) {
                        trackIndex++;
                    }

                    return talkEl;
                }
            );


        const numHidden = room.talks.filter(talk => !talk.hide).length;
        //to popultate in the case where there are more talks in a given room than the other rooms.
        for (let i = 0; i < this.props.trackLength - numHidden; i++) {
            const talkIndex = trackIndex + i;
            talks.push(<div
                className={`talk-container empty ${talkIndex % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'}`}
                key={i}/>);
        }

        return talks;
    }

    render() {
        if (this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length == 1) {
            const room = this.props.slot.rooms[0];
            return (
                <div className="rooms single-track">
                    {this.props.slot.rooms && <Room key={room.name} showRoomHeader={false} room={room}>{
                        this.createRoom(room, 0)
                    }</Room>}
                </div>);
        } else {
            // Need to update dimensions of the grid
            const style = {
                gridTemplateColumns: `repeat(${this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length}, 1fr)`,
                gridTemplateRows: `60px ${this.props.trackLength > 0 ? `repeat(${this.props.trackLength}, 1fr)` : ''}`,
                msGridRows: `60px  ${this.props.trackLength > 0 ? `(1fr)[${this.props.trackLength}]` : ''}`,
                msGridColumns: `(1fr) [${this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length}]`
            };

            return (
                <div className="rooms multi-track" style={style}>
                    {this.props.slot && this.props.slot.rooms && this.props.slot.rooms.map((r, i) =>
                        <Room key={r.name}
                              index={i}
                              showRoomHeader={this.props.showRoomHeader}
                              room={r.name}>
                            {
                                this.createRoom(r, i)
                            }
                        </Room>)}
                </div>
            );
        }
    }
};

export default ScheduleEntry;
