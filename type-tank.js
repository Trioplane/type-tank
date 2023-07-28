/**
* @typedef {[number, number, number, number, number, number, number, number, number, number, number, number, number]} gStats
* @typedef {number} Color
*/

/**
 * @typedef {Object} Gun
 * @property {[number, number, number, number, number, number, number]} POSITION
 * @property {Object} [PROPERTIES]
 * @property {string} [PROPERTIES.LABEL]
 * @property {Tank | [Tank, Tank]} [PROPERTIES.TYPE]
 * @property {gStats} [PROPERTIES.SHOOT_SETTINGS]
 * @property {boolean} [PROPERTIES.AUTOFIRE]
 * @property {boolean} [PROPERTIES.ALT_FIRE]
 * @property {string} [PROPERTIES.STAT_CALCULATOR]
 * @property {boolean} [PROPERTIES.WAIT_TO_CYCLE]
 * @property {number} [PROPERTIES.MAX_CHILDREN]
 * @property {boolean} [PROPERTIES.SYNCS_SKILLS]
 * @property {boolean} [PROPERTIES.NEGATIVE_RECOIL]
 * @property {Color} [PROPERTIES.COLOR]
 * @property {boolean} [PROPERTIES.DESTROY_OLDEST_CHILD]
 * @property {boolean} [PROPERTIES.SHOOT_ON_DEATH]
 */

/**
 * @typedef {Object} Turret
 * @property {[number, number, number, number, number, number]} POSITION
 * @property {Tank | [Tank, Tank]} TYPE
 */

/**
 * @typedef {Object} Tank
 * @property {[Tank]} [PARENT]
 * @property {string} [NAME]
 * @property {string} [LABEL]
 * @property {string} [TYPE]
 * @property {number} [DAMAGE_CLASS]
 * @property {number} [DANGER]
 * @property {number} [VALUE]
 * @property {number} [SHAPE]
 * @property {Color} [COLOR]
 * @property {number} [SIZE]
 * @property {boolean} [INDEPENDENT]
 * @property {[string] | [string, Object]} [CONTROLLERS]
 * @property {boolean} [HAS_NO_MASTER]
 * @property {string} [MOTION_TYPE]
 * @property {string} [FACING_TYPE]
 * @property {boolean} [DRAW_HEALTH]
 * @property {boolean} [DRAW_SELF]
 * @property {boolean} [IS_SMASHER]
 * @property {string} [STAT_NAMES]
 * @property {boolean} [DAMAGE_EFFECTS]
 * @property {boolean} [RATEFFECTS]
 * @property {boolean} [MOTION_EFFECTS]
 * @property {boolean} [INTANGIBLE]
 * @property {boolean} [ACCEPTS_SCORE]
 * @property {boolean} [GIVE_KILL_MESSAGE]
 * @property {boolean} [CAN_GO_OUTSIDE_ROOM]
 * @property {string} [HITS_OWN_TYPE]
 * @property {boolean} [DIE_AT_LOW_SPEED]
 * @property {boolean} [DIE_AT_RANGE]
 * @property {boolean} [CLEAR_ON_MASTER_UPGRADE]
 * @property {boolean} [PERSISTS_AFTER_DEATH]
 * @property {boolean} [VARIES_IN_SIZE]
 * @property {boolean} [HEALTH_WITH_LEVEL]
 * @property {boolean} [CAN_BE_ON_LEADERBOARD]
 * @property {boolean} [HAS_NO_RECOIL]
 * @property {boolean} [BUFF_VS_FOOD]
 * @property {boolean} [OBSTACLE]
 * @property {boolean} [CRAVES_ATTENTION]
 * @property {Array<number> | boolean} [NECRO]
 * @property {[number, number]} [INVISIBLE]
 * @property {string} [TOOLTIP]
 * @property {boolean} [RESET_UPGRADES]
 * @property {boolean} [ARENA_CLOSER]
 * @property {boolean} [IGNORED_BY_AI]
 * @property {Array<Tank>} [UPGRADES_TIER_0]
 * @property {Array<Tank>} [UPGRADES_TIER_1]
 * @property {Array<Tank>} [UPGRADES_TIER_2]
 * @property {Array<Tank>} [UPGRADES_TIER_3]
 * @property {Array<Tank>} [UPGRADES_TIER_4]
 * @property {Array<Tank>} [UPGRADES_TIER_5]
 * @property {Array<Tank>} [UPGRADES_TIER_6]
 * @property {Array<Tank>} [UPGRADES_TIER_7]
 * @property {Array<Tank>} [UPGRADES_TIER_8]
 * @property {Array<Tank>} [UPGRADES_TIER_9]
 * @property {Array<number>} [SKILL]
 * @property {number} [LEVEL]
 * @property {Array<number>} [SKILL_CAP]
 * @property {Array<Gun>} [GUNS]
 * @property {Array<Turret>} [TURRETS]
 * @property {{
*   BLIND?: boolean;
*   FARMER?: boolean;
*   NO_LEAD?: boolean;
*   SKYNET?: boolean;
*   LIKES_SHAPES?: boolean;
*   FULL_VIEW?: boolean;
*   chase?: boolean;
*   STRAFE?: boolean;
* }} [AI]
* @property {number} [MAX_CHILDREN]
* @property {{
*   ACCELERATION?: number;
*   SPEED?: number;
*   HEALTH?: number;
*   RESIST?: number;
*   SHIELD?: number;
*   REGEN?: number;
*   DAMAGE?: number;
*   PENETRATION?: number;
*   RANGE?: number;
*   FOV?: number;
*   DENSITY?: number;
*   STEALTH?: number;
*   PUSHABILITY?: number;
*   HETERO?: number;
* }} [BODY]
* @property {{
*   LEVEL: number;
* }} [FOOD]
* @property {string} [BROADCAST_MESSAGE]
*/

const Color = {
    Teal: 0,
    lGreen: 1,
    Orange: 2,
    Yellow: 3,
    Lavender: 4,
    Pink: 5,
    vLGrey: 6,
    lgrey: 7,
    GuiWhite: 8,
    Black: 9,
    Blue: 10,
    Green: 11,
    Red: 12,
    Gold: 13,
    Purple: 14,
    Magenta: 15,
    Grey: 16,
    dGrey: 17,
    White: 18,
    GuiBlack: 19,
    Epilepsy: 20,
    BlueToGrey: 21,
    GreyToBlue: 22,
    RedToGrey: 23,
    GreyToRed: 24,
    Brown1: 25,
    Brown2: 26,
    BrownTeam: 27,
    Cyan: 28,
    Purple1: 29,
    Blue1: 30,
    Red1: 31,
    Orange1: 32,
    Lime: 33,
    Yellow1: 34,
    Rainbow: 35,
    Pride: 36,
    Brown3: 37,
    Orange2: 38,
    ForestGreen: 39,
};