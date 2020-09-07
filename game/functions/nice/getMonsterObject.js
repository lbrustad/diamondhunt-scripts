'use strict';

function getMonsterObject(name)
{
	if (window.chickenMonsterObj == null)
	{
		chickenMonsterObj = new ChickenMonster;
		chickenMonsterObj.preloadImages();
	}
	if (window.skyChickenMonsterObj == null)
	{
		skyChickenMonsterObj = new SkyChickenMonster;
		skyChickenMonsterObj.preloadImages();
	}
	if (window.bushyMonsterObj == null)
	{
		bushyMonsterObj = new BushyMonster;
		bushyMonsterObj.preloadImages();
	}
	if (window.fireHawkMonsterObj == null)
	{
		fireHawkMonsterObj = new FireHawkMonster;
		fireHawkMonsterObj.preloadImages();
	}
	if (window.iceHawkMonsterObj == null)
	{
		iceHawkMonsterObj = new IceHawkMonster;
		iceHawkMonsterObj.preloadImages();
	}
	if (window.piranhasMonsterObj == null)
	{
		piranhasMonsterObj = new PiranhasMonster;
		piranhasMonsterObj.preloadImages();
	}
	if (window.lavaAlienMonsterObj == null)
	{
		lavaAlienMonsterObj = new LavaAlienMonster;
		lavaAlienMonsterObj.preloadImages();
	}
	if (window.reaperMonsterObj == null)
	{
		reaperMonsterObj = new ReaperMonster;
		reaperMonsterObj.preloadImages();
	}
	if (window.sharkMonsterObj == null)
	{
		sharkMonsterObj = new SharkMonster;
		sharkMonsterObj.preloadImages();
	}
	if (window.tridentSoldierMonsterObj == null)
	{
		tridentSoldierMonsterObj = new TridentSoldierMonster;
		tridentSoldierMonsterObj.preloadImages();
	}
	if (window.babyPolarBearMonsterObj == null)
	{
		babyPolarBearMonsterObj = new BabyPolarBearMonster;
		babyPolarBearMonsterObj.preloadImages();
	}
	if (window.faradoxMinionObj == null)
	{
		faradoxMinionObj = new FaradoxMinionMonster;
		faradoxMinionObj.preloadImages();
	}
	if (window.faradoxMinion2Obj == null)
	{
		faradoxMinion2Obj = new FaradoxMinionMonster2;
		faradoxMinion2Obj.preloadImages();
	}
	if (window.skeletonTreeMonsterObj == null)
	{
		skeletonTreeMonsterObj = new SkeletonTreeMonster;
	}
	if (window.ratMonsterObj == null)
	{
		ratMonsterObj = new RatMonster;
		ratMonsterObj.preloadImages();
	}
	if (name == "bee" && window.beeMonsterObj == null)
	{
		beeMonsterObj = new BeeMonster;
		beeMonsterObj.preloadImages();
	}
	if (name == "bat" && window.batMonsterObj == null)
	{
		batMonsterObj = new BatMonster;
		batMonsterObj.preloadImages();
	}
	if (name == "fireMage" && window.fireMageMonsterObj == null)
	{
		fireMageMonsterObj = new FireMageMonster;
		fireMageMonsterObj.preloadImages();
	}
	if (name == "boneHead" && window.boneHeadMonsterObj == null)
	{
		boneHeadMonsterObj = new BoneHeadMonster;
		boneHeadMonsterObj.preloadImages();
	}
	if (name == "ghost" && window.ghostMonsterObj == null)
	{
		ghostMonsterObj = new GhostMonster;
		ghostMonsterObj.preloadImages();
	}
	if (name == "explorer" && window.explorerMonsterObj == null)
	{
		explorerMonsterObj = new ExplorerMonster;
		explorerMonsterObj.preloadImages();
	}
	if (name == "skeletonGhost" && window.skeletonGhostMonsterObj == null)
	{
		skeletonGhostMonsterObj = new SkeletonGhostMonster;
		skeletonGhostMonsterObj.preloadImages();
	}
	if (name == "cemeterySkeleton" && window.cemeterySkeletonMonsterObj == null)
	{
		cemeterySkeletonMonsterObj = new CemeterySkeletonMonster;
		cemeterySkeletonMonsterObj.preloadImages();
	}
	if (name == "fireCemeterySkeleton" && window.fireCemeterySkeletonMonsterObj == null)
	{
		fireCemeterySkeletonMonsterObj = new FireCemeterySkeletonMonster;
		fireCemeterySkeletonMonsterObj.preloadImages();
	}
	if (name == "iceCemeterySkeleton" && window.iceCemeterySkeletonMonsterObj == null)
	{
		iceCemeterySkeletonMonsterObj = new IceCemeterySkeletonMonster;
		iceCemeterySkeletonMonsterObj.preloadImages();
	}
	if (window.snakeMonsterObj == null)
	{
		snakeMonsterObj = new SnakeMonster;
		snakeMonsterObj.preloadImages();
	}
	if (window.bearMonsterObj == null)
	{
		bearMonsterObj = new BearMonster;
		bearMonsterObj.preloadImages();
	}
	if (window.bearPackMonsterObj == null)
	{
		bearPackMonsterObj = new BearPackMonster;
		bearPackMonsterObj.preloadImages();
	}
	if (window.spiderMonsterObj == null)
	{
		spiderMonsterObj = new SpiderMonster;
		spiderMonsterObj.preloadImages();
	}
	if (window.skeletonMonsterObj == null)
	{
		skeletonMonsterObj = new SkeletonMonster;
		skeletonMonsterObj.preloadImages();
	}
	if (window.yetiMonsterObj == null)
	{
		yetiMonsterObj = new YetiMonster;
		yetiMonsterObj.preloadImages();
	}
	if (window.pufferFishMonsterObj == null)
	{
		pufferFishMonsterObj = new PufferFishMonster;
		pufferFishMonsterObj.preloadImages();
	}
	if (window.mammaPolarBearObj == null)
	{
		mammaPolarBearObj = new MammaPolarBearMonster;
		mammaPolarBearObj.preloadImages();
	}
	if (window.giantSnakeMonsterObj == null)
	{
		giantSnakeMonsterObj = new GiantSnakeMonster;
		giantSnakeMonsterObj.preloadImages();
	}
	if (window.entMonsterObj == null)
	{
		entMonsterObj = new EntMonster;
		entMonsterObj.preloadImages();
	}
	if (window.thiefMonsterObj == null)
	{
		thiefMonsterObj = new ThiefMonster;
		thiefMonsterObj.preloadImages();
	}
	if (window.frozenBarbarianObj == null)
	{
		frozenBarbarianObj = new FrozenBarbarianMonster;
		frozenBarbarianObj.preloadImages();
	}
	switch (name)
	{
	case "chicken":
		return chickenMonsterObj;
	case "bushy":
		return bushyMonsterObj;
	case "fireHawk":
		return fireHawkMonsterObj;
	case "iceHawk":
		return iceHawkMonsterObj;
	case "piranhas":
		return piranhasMonsterObj;
	case "lavaAlien":
		return lavaAlienMonsterObj;
	case "reaper":
		return reaperMonsterObj;
	case "shark":
		return sharkMonsterObj;
	case "tridentSoldier":
		return tridentSoldierMonsterObj;
	case "babyPolarBear":
		return babyPolarBearMonsterObj;
	case "skeletonTree":
		return skeletonTreeMonsterObj;
	case "rat":
		return ratMonsterObj;
	case "bee":
		return beeMonsterObj;
	case "bat":
		return batMonsterObj;
	case "snake":
		return snakeMonsterObj;
	case "mammaPolarBear":
		return mammaPolarBearObj;
	case "fireMage":
		return fireMageMonsterObj;
	case "ent":
		return entMonsterObj;
	case "thief":
		return thiefMonsterObj;
	case "frozenBarbarian":
		return frozenBarbarianObj;
	case "faradoxMinion":
		return faradoxMinionObj;
	case "faradoxMinion2":
		return faradoxMinion2Obj;
	case "skyChicken":
		return skyChickenMonsterObj;
	case "yeti":
		return yetiMonsterObj;
	case "pufferFish":
		return pufferFishMonsterObj;
	case "giantSnake":
		return giantSnakeMonsterObj;
	case "bear":
		return bearMonsterObj;
	case "bearPack":
		return bearPackMonsterObj;
	case "spider":
		return spiderMonsterObj;
	case "skeleton":
		return skeletonMonsterObj;
	case "boneHead":
		return boneHeadMonsterObj;
	case "ghost":
		return ghostMonsterObj;
	case "explorer":
		return explorerMonsterObj;
	case "skeletonGhost":
		return skeletonGhostMonsterObj;
	case "cemeterySkeleton":
		return cemeterySkeletonMonsterObj;
	case "fireCemeterySkeleton":
		return fireCemeterySkeletonMonsterObj;
	case "iceCemeterySkeleton":
		return iceCemeterySkeletonMonsterObj;
	}
	return "none";
};
