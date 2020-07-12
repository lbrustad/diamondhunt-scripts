'use strict';

function addHitSplit(data)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var cur_node = data.split("~");
		var indices_in = cur_node[0];
		var rest_pts_in = cur_node[1];
		var uvs_in = cur_node[2];
		var cur_start_pt_index = cur_node[3];
		var cur_end_pt_index = cur_node[4];
		var cur_start_index = cur_node[5];
		var cur_end_index = getCurrentMillis();
		var new_region = new HitAnimation(indices_in, rest_pts_in, uvs_in, cur_start_pt_index, cur_end_pt_index, cur_start_index, cur_end_index);
		if (indices_in == "hero")
		{
			global_heroHitAnimationHashSet.add(new_region);
		}
		else
		{
			global_monsterHitAnimationHashSet.add(new_region);
		}
	}
};
